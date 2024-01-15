import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError("There was a problem retrieving the weather data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(`${location.coords.latitude}`);
      setLong(`${location.coords.longitude}`);
      await fetchWeatherData();
    })();
  }, [lat, long]);

  return [isLoading, error, weatherData];
};
