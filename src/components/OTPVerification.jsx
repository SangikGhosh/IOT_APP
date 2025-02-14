import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";

const OTPVerification = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  return (
    <View style={s`flex-1 bg-black justify-center px-8`}>
      <Text style={s`text-white text-3xl font-bold mb-6 text-center`}>Enter OTP</Text>

      <TextInput
        placeholder="4-digit OTP"
        placeholderTextColor="gray"
        keyboardType="numeric"
        maxLength={4}
        style={s`bg-gray-800 text-white px-4 py-3 rounded-lg text-center text-xl`}
        onChangeText={setOtp}
      />

      <TouchableOpacity
        style={s`bg-white py-3 rounded-lg mt-6`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={s`text-black text-center font-bold`}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;
