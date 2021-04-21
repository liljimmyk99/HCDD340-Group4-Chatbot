import { SafeAreaView, View, StyleSheet } from "react-native"
import React from 'react';
import Chats from '../Assets/chatbot/chats'
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export default function ChatBot({route, navigation}) {
    console.log("On ChatBot Screen")
    return(
        <SafeAreaView style={styles.container}>
            <View style={{}}>
                <Header style="auto"/>
            </View>

            <View>
                <Chats/>
            </View>

            <View style={{}}>
                <Footer style="auto"/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#d3e8f4',
    },
  
  });