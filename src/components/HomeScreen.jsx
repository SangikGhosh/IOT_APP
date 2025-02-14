import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Animated } from "react-native";
import { s } from "react-native-wind";
import ImagePicker from "react-native-image-picker";
import styles from "../Fonts/customFonts";

const HomeScreen = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [hostId, setHostId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successAnim] = useState(new Animated.Value(0));

  const pickImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.uri) {
        setAvatar(response.uri);
      }
    });
  };

  const handleAddDevice = () => {
    Animated.timing(successAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => successAnim.setValue(0), 2000);
    });
  };

  return (
    <View style={[s`flex-1 bg-black justify-center items-center p-5`, styles.container]}>
      {/* Avatar Upload */}
      <TouchableOpacity onPress={pickImage} style={s`absolute top-5 left-5`}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={s`w-16 h-16 rounded-full`} />
        ) : (
          <View style={s`w-16 h-16 bg-white rounded-full justify-center items-center`}>
            <Text style={s`text-black font-bold`}>+</Text>
          </View>
        )}
      </TouchableOpacity>

      <Text style={s`text-white text-3xl font-bold mb-6`}>Welcome Home! 🎉</Text>

      <TouchableOpacity style={s`bg-white py-3 px-6 rounded-lg`}>
        <Text style={s`text-black font-bold`}>Logout</Text>
      </TouchableOpacity>

      {/* Floating Plus Button */}
      <TouchableOpacity
        style={s`absolute bottom-10 right-10 bg-blue-500 p-4 rounded-full`}
        onPress={() => setShowCard(!showCard)}
      >
        <Text style={s`text-white text-lg font-bold`}>+</Text>
      </TouchableOpacity>

      {/* Animated Input Card */}
      {showCard && (
        <View style={s`absolute bottom-20 bg-gray-800 p-5 rounded-lg w-80`}>
          <TextInput
            placeholder="Host ID"
            placeholderTextColor="#bbb"
            style={s`bg-white p-3 rounded mb-3`}
            value={hostId}
            onChangeText={setHostId}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#bbb"
            style={s`bg-white p-3 rounded mb-3`}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#bbb"
            secureTextEntry
            style={s`bg-white p-3 rounded mb-3`}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={s`bg-green-500 py-3 rounded-lg mt-3`}
            onPress={handleAddDevice}
          >
            <Text style={s`text-white text-center font-bold`}>Add Device</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Success Message */}
      <Animated.View
        style={{
          position: "absolute",
          bottom: 50,
          opacity: successAnim,
          transform: [{ scale: successAnim }],
        }}
      >
        <Text style={s`text-green-400 text-lg font-bold`}>Device Added Successfully! ✅</Text>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
