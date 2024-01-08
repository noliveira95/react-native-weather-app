import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import RowText from "../src/components/RowText";
import { weatherType } from "../src/utils/weatherType";

const CurrentWeather = () => {
  // Styles
  const {
    wrapper,
    container,
    currentTemp,
    feelsLikeTemp,
    highLowTempWrapper,
    highLowTemp,
    bodyWrapper,
    description,
    message,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={currentTemp}>6</Text>
        <Text style={feelsLikeTemp}>Feels like 5</Text>
        <RowText
          messageOne="High: 8 "
          messageTwo="Low: 6"
          containerStyles={highLowTempWrapper}
          messageOneStyles={highLowTemp}
          messageTwoStyles={highLowTemp}
        />
      </View>
      <RowText
        messageOne="Sunny"
        messageTwo={weatherType["Thunderstorm"].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "pink",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  currentTemp: {
    color: "black",
    fontSize: 48,
  },
  feelsLikeTemp: {
    color: "black",
    fontSize: 32,
  },
  highLowTempWrapper: {
    flexDirection: "row",
  },
  highLowTemp: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 24,
    marginBottom: 40,
  },
  description: {
    color: "black",
    fontSize: 24,
  },
  message: {
    color: "black",
    fontSize: 20,
  },
});

export default CurrentWeather;
