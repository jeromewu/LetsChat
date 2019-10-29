/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <TextInput
            placeholder="點我點我"
            style={styles.textInput}
            multiline
            value={value}
            onChangeText={text => setValue(text)}
          />
        </View>
        <View style={styles.footer}>
          <Button
            style={styles.button}
            title="清除"
            onPress={() => setValue('')}
            color="#f44336"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  footer: {
    height: 48,
    paddingLeft: 8,
    paddingRight: 8,
  },
  textInput: {
    fontSize: 96,
  }
});

export default App;
