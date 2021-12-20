import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import CategoryMeal from "../screens/CategoryMeals";
import MealDetails from "../screens/MealDetails";

const Stack = createStackNavigator();

const MealNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoryMeal" component={CategoryMeal} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
  );
};

export default MealNavigator;
