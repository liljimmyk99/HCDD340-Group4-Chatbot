import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function Header(props){
    console.log("Header in use")
    const PTSD_HOTLINE = '1-800-273-8255'

  const callHome = () => {
    Linking.openURL(`tel:${PTSD_HOTLINE}`)
  }

    return(
        <View style={styles.container}>
        
          <TouchableOpacity onPress={props.openDrawer} >
            <View style={styles.iconsContainer}>
              <Entypo name="menu" size= {50} color="#4051b5" />
            </View>
          </TouchableOpacity>


        <TouchableOpacity style={styles.titleContainer}>
          <View > 
            <Text style={styles.titleText}>{props.title}</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity onPress={callHome} style={styles.iconsContainer}>
            <View style={styles.iconsContainer}> 
              <Entypo name="phone" size= {50} color="#4051b5" />
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

    titleContainer:{
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    titleText: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#4051b5',
    },
    iconsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
  
      
    }

    });