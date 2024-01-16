import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../src/components/RowText";
import { weatherType } from "../src/utils/weatherType";
import { useStore } from "../src/hooks/useStore";

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

  const { weatherData } = useStore();
  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData.list[0];

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        {
          backgroundColor: weatherType[weatherCondition].backgroundColor,
        },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={currentTemp}>{temp}</Text>
        <Text style={feelsLikeTemp}>{`Feels like: ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max} `}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowTempWrapper}
          messageOneStyles={highLowTemp}
          messageTwoStyles={highLowTemp}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
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
