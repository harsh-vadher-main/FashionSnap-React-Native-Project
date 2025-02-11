import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {FONTFAMILY, FONTSIZE} from '../themes/Theme';

type headerProps = {
  text: string;
  btn: string;
  onPress1: () => void;
  onPress2: () => void;
};
const HeaderTop = ({text, btn, onPress1, onPress2}: headerProps) => {
  return (
    <View style={styles.headerMain}>
      <TouchableOpacity onPress={onPress1}>
        <SvgXml xml={icons().back} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      <TouchableOpacity onPress={onPress2}>
        <SvgXml xml={btn} style={styles.searchBtn} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    top: 0,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontFamily: FONTFAMILY.Poppins_Regular,
    marginTop: 10,
    fontSize: FONTSIZE.size_18,
  },
  backButton: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchBtn: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
