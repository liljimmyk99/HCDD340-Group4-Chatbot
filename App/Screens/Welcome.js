import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Welcome({route, navigation}){
  console.log("On Welcome Screen")
    return (
        <View style={styles.container}>
          <Text>Welcome to PTSD Something</Text>
          <Button title="Go Home" onPress={() => {navigation.navigate('Home')}} />
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