import {StatusBar} from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Metrics} from '../Themes/Metrics';
import { Colors } from '../Themes/Colors';



export default function SupportOptions({route, navigation}){
  console.log("On SupportOptions Screen")

  const webAction = url => WebBrowser.openBrowserAsync(url);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Header openDrawer={() => navigation.openDrawer()} title={route.name}/>
        </View>
    
        <ScrollView style={{flex: 1}}>
          <Text style={styles.itemText}>Support Exercises</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Slider', {url: "https://www.psychologytoday.com/us/articles/200111/recovering-trauma"})}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Reminded of Trauma</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Slider', {url: "https://www.intoactionrecovery.com/avoiding-addiction-triggers-and-relapse/"})}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Avoiding Triggers</Text>
          </View>
          </TouchableOpacity>
           

           <TouchableOpacity onPress={() => navigation.navigate('Slider', {url: "https://thoughtcatalog.com/rania-naim/2017/11/read-this-when-you-feel-disconnected-from-everyone-around-you/"})}>
            <View style={styles.item}>
            <Text style={styles.itemText}>Disconnected from People</Text>
          </View>
           </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Slider', {url: "https://www.learning-mind.com/feel-disconnected-from-reality-stop-dissociation/"})}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Disconnected from Reality</Text>
          </View>
          </TouchableOpacity>


           <TouchableOpacity onPress={() => navigation.navigate('Slider', {url: "https://www.oprah.com/spirit/how-to-overcome-your-feelings-of-hopelessness/all"})}>
                      <View style={styles.item}>
            <Text style={styles.itemText}>Sad/Hopeless</Text>
          </View>
           </TouchableOpacity >


           <TouchableOpacity onPress={() => navigation.navigate('Slider', {url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434"})}>
                      <View style={styles.item}>
            <Text style={styles.itemText}>Angry</Text>
          </View>
           </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Slider', {url: "https://www.aarp.org/health/conditions-treatments/info-2019/have-trouble-sleeping.html"})}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Unable to Sleep</Text>
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