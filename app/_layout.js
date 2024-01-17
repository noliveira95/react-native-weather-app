import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useGetWeather } from "../src/hooks/useGetWeather";
import ErrorScreen from "../src/components/screens/ErrorScreen";

const RootLayout = () => {
  let [isLoading, error, weatherData] = useGetWeather();

  if (weatherData && weatherData.list && !isLoading) {
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
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorScreen />
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RootLayout;
