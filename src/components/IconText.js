import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconSize, iconColor, text, textStyles } = props;
  return (
    <View>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.textTheme, textStyles]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
