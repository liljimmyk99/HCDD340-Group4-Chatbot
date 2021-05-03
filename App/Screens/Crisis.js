import {StatusBar} from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, ScrollView, TouchableOpacity,Linking , Slider} from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Metrics} from '../Themes/Metrics';
import { Colors } from '../Themes/Colors';
import { Entypo } from '@expo/vector-icons'; 



const PTSD_HOTLINE = '1-800-273-8255'

  const callPTSD = () => {
    Linking.openURL(`tel:${PTSD_HOTLINE}`)
  }
  const Separator = () => (
  <View style={styles.separator} />
);



export default function Crisis({route, navigation}) {
    console.log("Crisis")
    const {activity} = route.params

    const webAction = url => WebBrowser.openBrowserAsync(url);
    
    return(
      <SafeAreaView style={styles.container}> 
    <View style={{flex:0.2, width:'100%',  backgroundColor:'#d3e8f4'  }}>
          <Header openDrawer={() => navigation.openDrawer()} title={route.name}/>
     </View>
     <ScrollView  style={{backgroundColor:'White', margin:20, alignContent: 'center,'}}>
     <Text style ={styles.hometext}>Thats a very high distress level. It may be best for you to get some immediate support. Would you like to talk to someone now?
     </Text>

       
        
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonStyle}>

            <Text style={styles.buttonText}>Go Back</Text>
          
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {webAction(activity)}} style={styles.buttonStyle}>

            <Text style={styles.buttonText}>No Give Me a tool</Text>
          
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {callPTSD()}} style={styles.buttonStyle}>

        <Text style={styles.buttonText}>Yes To Someone Now</Text>
          
    </TouchableOpacity>

    
     </ScrollView>
<View style={{flex:0.3, width:'100%',  backgroundColor:'#d3e8f4'}}>
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
  alignContent:"center", 
  marginTop:30,
 marginBottom:180,
   

  },
 
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  buttonStyle: {
   
    borderRadius: 10,
    
    backgroundColor: 'white',
    margin: 10,
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center', 
    justifyContent: 'center',
     backgroundColor:'#2196f3', 
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'black',
     fontSize: 20,
     alignContent:"center",
     color: 'white',


  },

  
});

