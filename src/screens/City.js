import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageLayout}
        source={require("../../assets/city-bg.jpg")}
      >
        <Text style={[styles.cityName, styles.cityText]}>New York, NY</Text>
        <Text style={[styles.countryName, styles.cityText]}>United States</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName="user"
            iconSize={48}
            iconColor="black"
            text="8.4M"
            textStyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={48} color="black" />
          <Text style={styles.riseSetText}>07:12 AM</Text>
          <Feather name="sunset" size={48} color="black" />
          <Text style={styles.riseSetText}>17:04 PM</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 32,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
  },
  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  populationText: {
    fontSize: 24,
    marginLeft: 10,
    color: "black",
  },
  riseSetWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 32,
  },
  riseSetText: {
    fontSize: 20,
    color: "black",
  },
});

export default City;
