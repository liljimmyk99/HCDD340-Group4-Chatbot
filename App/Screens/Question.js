import {StatusBar} from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Metrics} from '../Themes/Metrics';
import { Colors } from '../Themes/Colors';



export default function Questions({route, navigation}){
  console.log("On SupportOptions Screen")

  const webAction = url => WebBrowser.openBrowserAsync(url);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
           <Header openDrawer={() => navigation.openDrawer()} title={route.name}/>
        </View>
    
        <ScrollView style={{flex: 1}}>
          <Text style={styles.itemText}>About PTSD</Text>


          <TouchableOpacity onPress={() => webAction("https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd/")}>
          <View style={styles.item}>
            <Text style={styles.itemText}>What is PTSD</Text>
          </View>
          </TouchableOpacity>
           

           <TouchableOpacity onPress={() =>  webAction("https://www.michiganpsychologicalassociation.org/index.php?option=com_dailyplanetblog&amp;view=entry&amp;year=2021&amp;month=01&amp;day=02&amp;id=55:who-gets-ptsd-and-who-doesn-t-")}>
            <View style={styles.item}>
            <Text style={styles.itemText}>Who can get PTSD</Text>
          </View>
           </TouchableOpacity>


          <TouchableOpacity onPress={() =>  webAction("https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967")}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Symptoms of PTSD</Text>
          </View>
          </TouchableOpacity>


           <TouchableOpacity onPress={() => webAction("http://www.ptsdalliance.org/help/")}>
                      <View style={styles.item}>
            <Text style={styles.itemText}>Find In-Perosn/Over the Phone Support</Text>
          </View>
           </TouchableOpacity >


           <TouchableOpacity onPress={() => navigation.navigate('SupportOptions')}>
                      <View style={styles.item}>
            <Text style={styles.itemText}>Suppport Exercises</Text>
          </View>
           </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Crisis', {activity: "https://www.ptsd.va.gov"})}>
          <View style={styles.item}>
            <Text style={styles.itemText}>I'm in Crisis </Text>
          </View>
          </TouchableOpacity>
          
        </ScrollView>
        
        
        <View style={styles.footerContainer}>
          <Footer goHome={() => navigation.navigate("Home")} goQuestion={() => navigation.navigate("Question")} goProfile={() => navigation.navigate("Profile")}/>
        </View>         
    
    </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3e8f4',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  item: {
   borderWidth: 5,
   borderRadius: 60,
   borderColor: 'blue',
   margin: 10,
   width:'90%'
  },

  itemText: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },

  footerContainer:{

    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#d3e8f4',
  },
    headerContainer:{
    
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
   borderBottomWidth: 1,
   borderColor: '#d3e8f4',
  }


  });