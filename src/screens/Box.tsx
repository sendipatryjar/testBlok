import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MARGIN, SIZE} from './../utils/Utils';

const Box = ({count}) => {
  const backgroundColor = count % 2 === 0 ? '#6e48eb' : '#c0a946';
  const arr = ["B2222IKN", "A3590LMN", "C5543KKP", "A5555KYT", "B1ND", "A9OK", "B247882930PPP", "B3374892KH",
  "K738971843789KH", "R3852123L"]
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.text}>{arr[count]}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    width: SIZE - MARGIN,
    height: SIZE - MARGIN,
    margin: MARGIN,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#cde9e4',
  },
});