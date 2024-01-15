import React, { useState, useEffect } from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

const RootLayout = () => {
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

  if (weatherData) {
    console.log(weatherData);
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: {
            pathname: "/",
          },
          tabBarIcon: ({ color }) => (
            <Feather name="sun" size={24} color={color} />
          ),
          tabBarLabel: "Current",
          title: "Current Weather",
        }}
      />
      <Tabs.Screen
        name="upcoming"
        options={{
          href: {
            pathname: "/upcoming",
          },
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24} color={color} />
          ),
          tabBarLabel: "Upcoming",
          title: "Upcoming Weather",
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          href: {
            pathname: "/location",
          },
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" size={24} color={color} />
          ),
          tabBarLabel: "Location",
          title: "Location Details",
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RootLayout;
