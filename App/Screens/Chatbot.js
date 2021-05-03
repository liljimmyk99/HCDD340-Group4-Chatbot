import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView,Image } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import * as WebBrowser from 'expo-web-browser';


export default function ChatBot({route, navigation}) {
    console.log("On ChatBot Screen")
    console.log("On Home Screen")
      const webAction = url => WebBrowser.openBrowserAsync(url);
  return (
    <SafeAreaView style={styles.container}> 
    <View style={{flex:0.5, width:'100%',}}>
         <Header openDrawer={() => navigation.openDrawer()} title={route.name}/>
     </View>


 <ScrollView>
   <View style={styles.scroll}>

 <Text style ={styles.hometext}> Due to Issues with Chatbot frameworks, we are only able to get our chatbot to work in the web environment in snack.  Please click the button below to access a snack link to the chatbot</Text>

  <Button title="Open Chatbot" onPress={() => webAction("https://snack.expo.io/@jbk5603/github.com-liljimmyk99-hcdd340-group4-chatbot@feature-simplechat")}/>

   <StatusBar style="auto" />
    </View>
</ScrollView >

    <View style={{flex:0.4, width:'100%',}}>
   <Footer goHome={() => navigation.navigate("Home")} goQuestion={() => navigation.navigate("Question")} goProfile={() => navigation.navigate("Profile")}/>
   </View>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#d3e8f4',
  },

  hometext:{
    margin:20,
    fontSize:15,
   //fontFamily: 'helvetica',

  },
  picture:{
    width:'47%',
    height:'25%',
     

  },
  scroll:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
 


});
