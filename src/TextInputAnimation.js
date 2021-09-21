import React, { Component } from 'react';
import { StyleSheet, View, Animated, Button, TextInput } from 'react-native';

class TextInputAnimation extends Component {
  animatedWidth = new Animated.Value(200);
  animate = (value) => {
    Animated.timing(this.animatedWidth, {
      toValue: value,
      duration: 750,
      useNativeDriver: false,
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ width: this.animatedWidth }}>
          <TextInput
            style={[styles.input]}
            onBlur={() => this.animate(200)}
            onFocus={() => this.animate(325)}
            ref={(ref) => (this.input = ref)}
          />
        </Animated.View>
        <Button title="Submit" onPress={() => this.input.blur()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginVertical: 10,
    paddingHorizontal: 9,
  },
});

export default TextInputAnimation;
