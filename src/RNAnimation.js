import React from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';

const RNAnimations = () => {
  const marginTop = new Animated.Value(20);
  const animate = () => {
    Animated.timing(marginTop, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Animate Box" onPress={animate} />
      <Animated.View style={[styles.box, { marginTop: marginTop }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

export default RNAnimations;
