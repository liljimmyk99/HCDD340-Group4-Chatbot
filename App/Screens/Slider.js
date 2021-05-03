import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import { Slider, Icon } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import { Animated, Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Metrics from '../Themes/Metrics';

export default function SliderScreen({route, navigation}){

  console.log("SliderScreen Activated")

const {url} = route.params
//let url = 'https://www.google.com'

const [slideValue, setslideValue] = useState(0);

const webAction = url => WebBrowser.openBrowserAsync(url);

const nextAction = (value, goToURL) => {
   console.log("nextAction function activated - Value:" + value + " URL:" + goToURL)

    if (value >= 9){
          console.log("USER IS IN DISTRESS")
          navigation.navigate('Crisis', {activity: url})
    } else if (value >= 0 && value < 9){
      console.log("Going to Activity")
      webAction(goToURL)
    }
}

const skipAction = (goToURL) => {
   console.log("skipAction function activated URL:" + goToURL)
   webAction(goToURL)
}

const backAction = () => {
  console.log("backAction function activated")
  navigation.navigate('SupportOptions')
}

return(

<SafeAreaView style={styles.container}>

    <View style={{flex:0.1, width:'100%',}}>
         <Header openDrawer={() => navigation.openDrawer()} title={route.name}/>
     </View>


    <View style={styles.bodyContainer}>
        <View style={styles.sliderContainer}>

        <View style={styles.value}>
          <Text style={{ fontWeight: 'bold',color: 'black',}}> Distress Value: {slideValue}</Text>
        </View>

        <View style={styles.slider}>
        
          <Slider
          style={{ height: 250}}
            value={slideValue}
            onSlidingComplete={value => setslideValue(value)}
            orientation='vertical'
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="red"
            maximumTrackTintColor="white"
            step={1}
            trackStyle={{ borderRadius:30,width:30 ,height: 10, backgroundColor: "red" }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: "red" }}
            thumbProps={{
              children: (
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{ bottom: 20, right: 20 }}
                  color="#f50"
                />
              
             
              ),
            }}
            
          />

        </View>
    </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => nextAction(slideValue, url)} style={styles.buttonStyle}>

            <Text style={styles.buttonText}>Next</Text>
          
        </TouchableOpacity>

        <TouchableOpacity onPress={() => skipAction(url)} style={styles.buttonStyle}>
                  
            <Text style={styles.buttonText}>Skip</Text>
          
        </TouchableOpacity>

        <TouchableOpacity onPress={() => backAction()} style={styles.buttonStyle}>
                  
            <Text style={styles.buttonText}>Back</Text>
          
        </TouchableOpacity >
      </View>
      

</View>

    <View style={{flex:0.1, width:'100%',}}>
    <Footer goHome={() => navigation.navigate("Home")} goQuestion={() => navigation.navigate("Question")}/>
   </View>

</SafeAreaView>


);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor:'#d3e8f4',


  },

  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',

    
  },

  sliderContainer:{
    flex: 1, 
    alignContent: 'stretch', 
    justifyContent: 'center', 
    flexDirection: 'row',

  },

  slider: {
    flex: 2, 
    alignContent: 'stretch', 
    justifyContent: 'center', 
    flexDirection: 'row',
    

  },

  value: {
    flex: 1.3, 
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    alignContent: 'center', 


  },

  buttonContainer: {
    flex: 0.4,
    alignContent: 'stretch', 
    justifyContent: 'center',

   
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