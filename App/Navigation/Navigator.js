import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Welcome from '../Screens/Welcome';
import ChatBot from '../Screens/Chatbot';
import SupportOptions from '../Screens/SupportOptions'
import Slider from '../Screens/Slider'

const Drawer = createDrawerNavigator();

export default function Navigator(){
    console.log("Navigator activated")
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={PTSDStack}/>
                <Drawer.Screen name="Chat-Bot" component={ChatBot}/>

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
const Stack = createStackNavigator();
function PTSDStack(){
    console.log("PTSDStack activated")
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>

                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Slider" component={Slider} />
                <Stack.Screen name="SupportOptions" component={SupportOptions} />
               
            </Stack.Navigator>

    )
}