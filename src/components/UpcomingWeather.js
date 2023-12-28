import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";

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
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={DATA} renderItem={() => {}}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UpcomingWeather;
