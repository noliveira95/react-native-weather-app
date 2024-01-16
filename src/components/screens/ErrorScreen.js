import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function ErrorScreen() {
  return (
    <View style={styles.container}>
      <Feather name="alert-triangle" size={100} color="red" />
      <Text style={styles.errorMessage}>
        Something went wrong, please try again later.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});

export default ErrorScreen;
