import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({route, navigation}) {
    console.log("On Home Screen")
  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Go To Welcome" onPress={() => {navigation.navigate('Welcome')}} />
      <Button title="Open Drawer" onPress={() => {navigation.openDrawer()}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
