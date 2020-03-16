import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {increaseCounter, decreaseCounter} from '../actions';


const HomeScreen = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch()

  return (
      <View>
        <Text style={styles.text}>
          HomeScreen {counter}
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(increaseCounter())}
        >
          <Text>INCREASE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(decreaseCounter())}
        >
          <Text>DECREASE</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
