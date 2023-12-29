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

const DATA = [
  {
    dt_txt: "2021-06-24 12:00:00",
    main: {
      temp_min: 30,
      temp_max: 55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2021-06-25 12:00:00",
    main: {
      temp_min: 32,
      temp_max: 58,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2021-06-26 12:00:00",
    main: {
      temp_min: 28,
      temp_max: 50,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcomingWeather = () => {
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
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require("../assets/upcoming-bg.jpg")}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
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
