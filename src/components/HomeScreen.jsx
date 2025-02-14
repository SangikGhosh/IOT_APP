import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import styles from "../Fonts/customFonts";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[s`flex-1 bg-black justify-center items-center`, styles.text , styles.container]}>
      <Text style={s`text-white text-3xl font-bold mb-6`}>Welcome Home! 🎉</Text>

      <TouchableOpacity style={s`bg-white py-3 px-6 rounded-lg`} onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={s`text-black font-bold`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
