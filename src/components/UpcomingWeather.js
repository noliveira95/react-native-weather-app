import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/upcoming-bg.jpg")}
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
