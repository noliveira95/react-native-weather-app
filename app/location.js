import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import IconText from "../src/components/IconText";
import { useStore } from "../src/hooks/useStore";
import dayjs from "dayjs";

const City = () => {
  // Styles
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imageLayout,
  } = styles;

  const { weatherData } = useStore();
  const { name, country, population, sunrise, sunset } = weatherData.city;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require("../assets/city-bg.jpg")}
      >
        <View style={styles.infoContainer}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName="user"
              iconSize={48}
              iconColor="black"
              text={`Population: ${population}`}
              textStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName="sunrise"
              iconSize={48}
              iconColor="black"
              text={dayjs(sunrise).format("h:mm:ss a")}
              textStyles={[riseSetText, rowLayout]}
            />
            <IconText
              iconName="sunset"
              iconSize={48}
              iconColor="black"
              text={dayjs(sunset).format("h:mm:ss a")}
              textStyles={[riseSetText, rowLayout]}
            />
          </View>
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
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 32,
    marginTop: 12,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 32,
  },
  populationText: {
    fontSize: 24,
    marginLeft: 10,
    color: "black",
    margin: 12,
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 32,
  },
  riseSetText: {
    fontSize: 20,
    color: "black",
    margin: 12,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
