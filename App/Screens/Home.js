import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView,Image } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export default function Home({route, navigation}) {
    console.log("On Home Screen")
  return (
    <SafeAreaView style={styles.container}> 
    <View style={{flex:0.5, width:'100%',}}>
         <Header openDrawer={() => navigation.openDrawer()} title={route.name}/>
     </View>
 <Image style={styles.picture }
 source={require('../Assets/Robot.png')} />

 <ScrollView>
   <View style={styles.scroll}>

 <Text style ={styles.hometext}>Post-traumatic stress disorder (PTSD) is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event.
It is natural to feel afraid during and after a traumatic situation. Fear triggers many split-second changes in the body to help defend against danger or to avoid it. This “fight-or-flight” response is a typical reaction meant to protect a person from harm. Nearly everyone will experience a range of reactions after trauma, yet most people recover from initial symptoms naturally. Those who continue to experience problems may be diagnosed with PTSD. People who have PTSD may feel stressed or frightened, even when they are not in danger.</Text>

  <Button title="Open Support" onPress={() => {navigation.navigate("SupportOptions")}}/>

   <StatusBar style="auto" />
    </View>
</ScrollView >

    <View style={{flex:0.6, width:'100%',}}>
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
