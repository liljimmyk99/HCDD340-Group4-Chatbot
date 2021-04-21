import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image, Picker } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons'; 



export default function Footer(){
    console.log("Footer in use")
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.home}>
        <Entypo name="home" size={60} color="#4051b5" />        
        </View> 

        <View style = { styles.plus}>
        <Entypo name="plus" size={80} color="#4051b5" />
        </View>

        <View style = { styles.profile}>
        <Entypo name="user" size={60} color="#4051b5" />
        </View>

       


            {/* Profile Button */}
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3e8f4',
        flexDirection:'row',
        justifyContent:"space-around",
  
    },
  
  home:{
   marginTop:10,
    },
  
    plus: {
    
    },
  
    profile:{

     marginTop:10,
    },
  
  
  });