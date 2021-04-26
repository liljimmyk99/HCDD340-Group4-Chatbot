import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export default function Welcome({route, navigation}){
  console.log("On Welcome Screen")
    return (
      <View style={styles.container}>
      <View style={{flex:0.2, width:'100%',}}>
        <Header openDrawer={() => navigation.openDrawer()}/>
    </View>
    
    <ScrollView>
      <Text>Welcome to PTSD Something</Text>
      <Button title="Go Home" onPress={() => {navigation.navigate('Home')}} />
      <StatusBar style="auto" />
      </ScrollView>
       <View style={{flex:0.2, width:'100%',}}>
      <Footer goHome={() => navigation.navigate("Home")}/> 
      </View>         
    </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3e8f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  });