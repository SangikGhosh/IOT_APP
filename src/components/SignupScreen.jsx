import React, { useState, useRef } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Animated, Image, 
  KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard 
} from "react-native";
import { s } from "react-native-wind";
import { Eye, EyeOff } from "react-native-feather";

const FloatingLabelInput = ({ label, value, onChangeText, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.spring(labelPosition, {
      toValue: 1,
      speed: 10,  // Faster response
      bounciness: 8, // Smoother bounce effect
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.spring(labelPosition, {
        toValue: 0,
        speed: 10,
        bounciness: 8,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={s`mb-6 relative`}>
      <Animated.Text
        style={[
          s`absolute left-3 text-gray-400`,
          {
            top: labelPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0],
            }),
            fontSize: labelPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [16, 12],
            }),
            color: "white",
          },
        ]}
      >
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
        style={[
          s`border-b border-gray-500 text-white px-2 pb-2 pt-5 text-lg`,
          isFocused && s`border-white brightness-125`,
        ]}
      />
    </View>
  );
};

const PasswordInput = ({ value, onChangeText }) => {
  const [secureText, setSecureText] = useState(true);
  return (
    <View style={s`mb-6 relative`}> 
      <FloatingLabelInput label="Password" value={value} onChangeText={onChangeText} secureTextEntry={secureText} />
      <TouchableOpacity 
        onPress={() => setSecureText(!secureText)} 
        style={s`absolute right-3 top-6`}
      >
        {secureText ? <EyeOff stroke="white" width={24} height={24} /> : <Eye stroke="white" width={24} height={24} />}
      </TouchableOpacity>
    </View>
  );
};

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={s`flex-1 bg-black`}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={s`flex-grow justify-center px-8`} 
          keyboardShouldPersistTaps="handled"
        >
          <Text style={s`text-white text-4xl font-bold mb-8 pt-4 pb-2 text-center tracking-wider`}>
            Sign Up
          </Text>
          
          {/* Username Field */}
          <FloatingLabelInput label="Username" value={username} onChangeText={setUsername} />
          
          {/* Email Field */}
          <FloatingLabelInput label="Email" value={email} onChangeText={setEmail} />
          
          {/* Password Field */}
          <PasswordInput value={password} onChangeText={setPassword} />
          
          {/* Sign Up Button */}
          <TouchableOpacity style={s`bg-white py-3 rounded-full items-center mb-4 w-40 self-center`} activeOpacity={0.9}>
            <Text style={s`text-black font-bold text-lg`}>Sign up</Text>
          </TouchableOpacity>

          <Text style={s`text-gray-300 text-lg text-center mb-4`}>or</Text>
          
          {/* Google Sign Up Button */}
          <TouchableOpacity style={s`flex-row items-center justify-center bg-gray-800 py-3 rounded-full mb-4 w-60 self-center`}  activeOpacity={0.9}>
            <Image source={{ uri: "https://img.icons8.com/fluency/48/google-logo.png" }} style={s`w-6 h-6 mr-2 bg-transparent`} />
            <Text style={s`text-white text-lg font-bold`}>Sign up with Google</Text>
          </TouchableOpacity>

          {/* Navigate to Sign In */}
          <TouchableOpacity onPress={() => navigation.navigate("SigninScreen")} activeOpacity={0.9}>
            <Text style={s`text-gray-300 text-center mt-4 text-lg`}>
              Already have an account? <Text style={s`text-blue-500 brightness-125`}>Let's Sign In!</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
