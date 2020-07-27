import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  console.log('Config', Config);
  return (
    <SafeAreaView>
      <Text>Current env is {Config.ENV}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
