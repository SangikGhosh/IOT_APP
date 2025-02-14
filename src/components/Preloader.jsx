import React, { useEffect, useState, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import AppNavigator from "./AuthUI/AppNavigator";

export default function Preloader() {
  const [showSignup, setShowSignup] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAnim = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(translateXAnim, {
        toValue: 0,
        speed: 3,
        bounciness: 6,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        setShowSignup(true);
      }, 200);
    });
  }, []);

  if (showSignup) {
    return <AppNavigator />;
  }

  return (
    <View style={[styles.container, styles.fullScreen]}>
      <Animated.Text
        style={[
          styles.text,
          {
            letterSpacing: 4,
            fontSize: 80,
            color: "white",
            opacity: fadeAnim,
            transform: [{ translateX: translateXAnim }],
          },
        ]}
      >
        Fliker
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  text: {
    fontFamily: 'UberMoveBold',
  },
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
