import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from 'react-native';
import { s } from 'react-native-wind';
import styles from './Fonts/customFonts';

import Preloader from './components/Preloader';
import HomeScreen from './components/HomeScreen';
import AppNavigator from './components/AuthUI/AppNavigator';
import OTPVerification from './components/OTPVerification';
export default function App() {
  return (
      <Preloader/>
  );
}
