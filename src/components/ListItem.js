import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";

const ListItem = (props) => {
  // Props
  const { dt_txt, min, max, condition } = props;

  // Styles
  const { item, date, temp } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ListItem;
