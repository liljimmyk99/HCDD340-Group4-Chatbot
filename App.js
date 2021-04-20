import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './App/Navigation/Navigator';
import Footer from './App/Components/Footer';
import Header from './App/Components/Header';


export default function App() {
  console.log("Application Started")
  return (
    <Navigator/>
  );
}


