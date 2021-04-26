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
        
          <TouchableOpacity onPress={props.openDrawer}>
            <View>
              <Entypo name="menu" size= {50} color="#4051b5" />
            </View>
          </TouchableOpacity>


          <View> 
          </View>

          <TouchableOpacity onPress={callHome}>
            <View> 
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
    });