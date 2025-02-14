import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from 'react-native';
import { s } from 'react-native-wind';
import styles from './Fonts/customFonts';
import Preloader from './components/Preloader';
import SignupScreen from './components/SignupScreen';
import SigninScreen from './components/SigninScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Preloader" component={Preloader} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}