import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
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
