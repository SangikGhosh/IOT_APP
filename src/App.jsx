import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { s } from 'react-native-wind';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[s`text-gray-100 text-white text-4xl`, styles.text]}>Hey, Custom Font!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'UberMoveBold',
  },
});
