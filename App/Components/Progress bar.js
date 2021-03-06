import Animated from "react-native-reanimated";
import { SafeAreaView, View, StyleSheet,Dimensions } from "react-native"
import React from 'react';
import Chats from '../Assets/chatbot/chats'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

import Cursor from "./Components/Cursor";
import Labels from "./Components/Labels";

const { Value, max, add } = Animated;

const { width: totalWidth } = Dimensions.get("window");
const count = 5;
const width = totalWidth / count;
const height = width;
const styles = StyleSheet.create({
  container: {
    width: totalWidth,
    height,
    borderRadius: height / 2,
    backgroundColor: "#f1f2f6",
  },
});

export default () => {
  const x = new Value(0);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#bd536d",
          width: add(max(x, 0), height),
          height,
          borderRadius: height / 2,
        }}
      />
      <Labels size={height} {...{ x, count }} />
      <Cursor size={height} {...{ x, count }} />
    </View>
  );
};

