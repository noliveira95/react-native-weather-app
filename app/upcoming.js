import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../src/components/ListItem";
import { useStore } from "../src/hooks/useStore";

const UpcomingWeather = () => {
  const { weatherData } = useStore();
  const upcomingWeatherData = weatherData.list;

  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    );
  };

  // Styles
  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require("../assets/upcoming-bg.jpg")}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={upcomingWeatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // This is to get the height of the status bar
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
