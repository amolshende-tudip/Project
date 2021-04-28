import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import externalStyle from '../style/externalStyle';

const Splash = () => {
  return (
    <View style={externalStyle.splashContainer}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <Image
        style={externalStyle.splashImageContainer}
        source={require('../src/components/images/react.png')}
      />
      <Text style={externalStyle.splashText}> Loading.... </Text>
    </View>
  );
};

export default Splash;