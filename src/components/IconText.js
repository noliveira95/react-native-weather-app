import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  // Props
  const { iconName, iconSize, iconColor, text, textStyles } = props;

  // Styles
  const { container, textTheme } = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[textTheme, textStyles]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
