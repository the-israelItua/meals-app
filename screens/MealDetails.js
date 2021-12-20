import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetails = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the MealDetails</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetails;
