import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <Tabs initialRouteName="current">
      <Tabs.Screen
        name="current"
        options={{
          href: {
            pathname: "/current",
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

export default RootLayout;
