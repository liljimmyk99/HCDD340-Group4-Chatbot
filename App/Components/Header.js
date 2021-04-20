import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image, Picker } from 'react-native';

export default function Header(){
    console.log("Header in use")
    return(
        <SafeAreaView style={styles.container}>
        
        
        <View style={styles.menu}> 
        <Entypo name="menu" size= {50} color="#4051b5" />
        </View>

        <View style={styles.center}> 
        </View>

        <View style={styles.phone}> 
        <Entypo name="phone" size= {50} color="#4051b5" />
        </View>





            {/* Profile Button */}
            
            
        </SafeAreaView>
    )
}

    
const styles = StyleSheet.create({
    container: {
        flex: 0.8,
          backgroundColor: '#d3e8f4',
          flexDirection:'row',
          justifyContent:"space-around"
       
      
      },
    
      menu:{
     marginTop:10
    
      },
    
      phone:{
     marginTop:10
    
    
      },
    
    });