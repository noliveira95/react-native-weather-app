import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";
import dayjs from "dayjs";

const ListItem = (props) => {
  // Props
  const { dt_txt, min, max, condition } = props;

  // Styles
  const { item, date, temp, dateTextWrapper } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="black" />
      <View style={dateTextWrapper}>
        <Text style={date}>{dayjs(dt_txt).format("dddd")}</Text>
        <Text style={date}>{dayjs(dt_txt).format("h:mm:ss a")}</Text>
      </View>
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
    backgroundColor: "lightgray",
    opacity: 0.8,
  },
  date: {
    color: "black",
    fontSize: 15,
  },
  temp: {
    color: "black",
    fontSize: 20,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
