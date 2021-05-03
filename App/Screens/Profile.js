import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView,Image } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProfileView from '../Components/profileCard'

const profile = {    
    name: 'Jimmy Dadebo',
    dob: '04/06/99',
    age: 20,
    streetAddress: '1234 I declare',
    cityAddress: "Thumb War",
    stateAddress: "PA",
    isVeteran: "No",
    email: 'jfd0503@psu.edu',
    phone: "8144186699"

}

export default function Profile({route, navigation}) {
    console.log("On Profile Screen")
  return (
    <SafeAreaView style={styles.container}> 
    <View style={{flex:0.5, width:'100%',}}>
         <Header openDrawer={() => navigation.openDrawer()} title={route.name}/>
     </View>
 <View>
   <View style={styles.scroll}>

  {ProfileView(profile)}

   <StatusBar style="auto" />
    </View>
</View >

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

  scroll:{
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',

  },
 


});
