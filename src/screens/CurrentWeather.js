import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.currentTemp}>6</Text>
        <Text style={styles.feelsLikeTemp}>Feels like 5</Text>
        <View style={styles.highLowTempWrapper}>
          <Text style={styles.highLowTemp}>High: 8 </Text>
          <Text style={styles.highLowTemp}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
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
