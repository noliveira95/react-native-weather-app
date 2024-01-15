import React, { useState, useEffect } from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useGetWeather } from "../src/hooks/useGetWeather";

const RootLayout = () => {
  let [isLoading, error, weatherData] = useGetWeather();

  console.log(isLoading, error, weatherData);

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
