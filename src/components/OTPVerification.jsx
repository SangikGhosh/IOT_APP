import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";

const OTPVerification = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputs = useRef([]);

  useEffect(() => {
    let countdown;
    if (!canResend) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [canResend]);

  const handleChange = (text, index) => {
    if (text.length > 1) text = text.charAt(text.length - 1);

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const resendOTP = () => {
    setCanResend(false);
    setTimer(30);
    // Logic to resend OTP goes here (e.g., API call)
  };

  return (
    <View style={s`flex-1 bg-black justify-center px-8`}>
      <Text style={s`text-white text-4xl font-bold mb-2 text-center`}>
        Verify Email
      </Text>

      <Text style={s`text-gray-400 text-lg text-center mb-6`}>
        We have sent an OTP to your registered email or mobile number.
      </Text>

      <View style={s`flex-row justify-center`}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={s`w-14 h-14 mx-2 bg-gray-900 text-white text-2xl text-center rounded-lg border-2 ${
              activeIndex === index ? "border-white" : "border-gray-900"
            }`}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            onFocus={() => setActiveIndex(index)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={s`bg-white justify-center py-3 rounded-lg mt-6`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={s`text-black text-center text-xl font-bold`}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP Button with Timer */}
      <TouchableOpacity
        style={s`py-3 rounded-lg mt-4 ${
          canResend ? "bg-gray-700" : "bg-gray-900"
        }`}
        disabled={!canResend}
        onPress={resendOTP}
      >
        <Text style={s`text-white text-center text-lg`}>
          {canResend ? "Resend OTP" : `Resend OTP in ${timer}s`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;
