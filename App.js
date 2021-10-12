import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Ball from './src/Ball';
import RNAnimations from './src/RNAnimation';
import TextInputAnimation from './src/TextInputAnimation';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInputAnimation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginHorizontal: 10,
  },
});
