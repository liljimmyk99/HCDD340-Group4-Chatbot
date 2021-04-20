import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export default function Home({route, navigation}) {
    console.log("On Home Screen")
  return (
    <View style={styles.container}> 
    <View style={{flex:0.2, width:'100%',}}>
         <Header style = "auto"/>
     </View>

 <ScrollView >
 <Text>Welcome to Home Screen</Text>
   <Button title="Go To Welcome" onPress={() => {navigation.navigate('Welcome')}} />
   <Button title="Open Drawer" onPress={() => {navigation.openDrawer()}}/>
   <StatusBar style="auto" />
   </ScrollView>

    <View style={{flex:0.2, width:'100%',}}>
    <Footer style="auto"/>
   </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#d3e8f4',
  },

});
