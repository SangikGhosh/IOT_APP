import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import styles from '../Fonts/customFonts';

export default function Preloader({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.replace("SignupScreen");
      }, 1000);
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={[{ flex: 1, backgroundColor: "#121212", justifyContent: "center", alignItems: "center" }, styles.container , styles.text]}>
      <Animated.Text style={[{ fontSize: 40, fontWeight: "bold", color: "#fff", opacity: fadeAnim }]}>
        Fliker
      </Animated.Text>
    </View>
  );
}
