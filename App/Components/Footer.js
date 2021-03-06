import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Picker } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, FontAwesome } from '@expo/vector-icons'; 



export default function Footer(props){
    console.log("Footer in use")
    return(
        <View style={styles.container}>

        <TouchableOpacity onPress={props.goHome}>
          <View>
          <Entypo name="home" size={60} color="#4051b5" />        
          </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={props.goQuestion}>
          <View>
          <FontAwesome name="question" size={60} color="#4051b5" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={props.goProfile}>
          <View>
          <Entypo name="user" size={60} color="#4051b5" />
          </View>
        </TouchableOpacity>
        
        </View>
    )
}


const styles = StyleSheet.create({
      container: {
        flex: 1,
          backgroundColor: '#d3e8f4',
          flexDirection:'row',
          justifyContent:"space-between",
          paddingTop: 3,
          paddingLeft: 5,
          paddingRight: 5,
      },
  });