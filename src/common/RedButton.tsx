import {ButtonProps, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  style?: any;
  onPress?: ()=>void;
}
const RedButton = ({name, onPress, style}:Props) => {
  return (
    <Pressable style={styles.redButton} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default RedButton;

const styles = StyleSheet.create({
  redButton: {
    height: 48,
    backgroundColor: '#DB3022',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 20,
    shadowRadius: 25,
  },
  text: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '300',
  },
});
