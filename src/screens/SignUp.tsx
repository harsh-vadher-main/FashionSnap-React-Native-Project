import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import BottomTabs from '../navigation/BottomTabs';
import {FONTFAMILY} from '../themes/Theme';

export default function Signup() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootstackParams>>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.firstView}>
          <View style={styles.signupView}>
            <Text style={styles.signUptext}>Sign up</Text>
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Name</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.emailView}>
            <Text style={styles.emailText}>E-mail</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.passwordView}>
            <Text style={styles.passwordText}>Password</Text>
            <TextInput style={styles.textInput} secureTextEntry />
          </View>
        </View>
        <View style={styles.alreadyView}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.alreadyText}>Already have an Account? </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <SvgXml xml={icons().rightArrow} style={styles.svgArrow} />
          </Pressable>
        </View>
        <View style={styles.signUpButtonView}>
          <Pressable
            style={styles.SignUpBtn}
            onPress={() => navigation.navigate('BottomTabs')}>
            <Text style={styles.signupBtnText}>SIGN UP</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <Text style={styles.btmText}>Or sign up with social account </Text>
      </View>
      <View style={styles.signupIcons}>
        <SvgXml xml={icons().google} />
        <SvgXml xml={icons().facebook} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstView: {
    // backgroundColor: 'yellow',
    top: 20,
    marginHorizontal: 10,
  },
  signupView: {
    marginTop: 50,
    // backgroundColor: 'green',
  },
  signUptext: {
    fontSize: 34,
    fontFamily: FONTFAMILY.Poppins_Bold,
  },
  secondView: {
    // backgroundColor: 'red',
    top: 80,
    // height: '50%',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  nameView: {
    backgroundColor: '#ffffff',
    width: '95%',
    marginHorizontal: 5,
    height: 74,
    borderRadius: 10,
    // shadowColor: 'black',
    elevation: 4,
    // borderWidth : 1,
    // borderColor: '#ffffff',
  },
  nameText: {
    fontSize: 11,
    left: 20,
    top: 10,
    color: '#9B9B9B',
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  textInput: {
    fontSize: 17,
    marginHorizontal: 7,
    left: 10,
    color: 'black',
    borderRadius: 10,
    fontWeight: '200',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  emailView: {
    width: '95%',
    marginHorizontal: 5,
    height: 74,
    borderRadius: 10,
    shadowColor: 'black',
    backgroundColor: '#ffffff',
    elevation: 3,
    top: 20,
  },
  emailText: {
    fontSize: 11,
    left: 20,
    top: 10,
    color: '#9B9B9B',
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  passwordView: {
    width: '95%',
    height: 74,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 3,
    top: 40,
    backgroundColor: '#ffffff',
  },
  passwordText: {
    fontSize: 11,
    left: 20,
    top: 10,
    color: '#9B9B9B',
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  textInputView: {
    // backgroundColor: 'blue',
    top: 180,
    width: '95%',
    marginHorizontal: 10,
    height: 74,
    borderRadius: 5,
    shadowColor: 'black',
    elevation: 3,
  },
  textField: {
    color: '#9B9B9B',
    top: 10,
    left: 20,
    fontWeight: '300',
  },

  nameInput: {
    top: 5,
    left: 12,
    fontSize: 18,
    color: 'black',
    fontWeight: '200',
  },
  textInputViewEmail: {
    top: 25,
    backgroundColor: '#ffffff',
    width: '95%',
    marginHorizontal: 10,
    height: 74,
    borderRadius: 5,
    shadowColor: 'black',
    elevation: 3,
  },
  textInputViewPassword: {
    top: 35,
    backgroundColor: '#ffffff',
    width: 343,
    height: 74,
    borderRadius: 5,
    shadowColor: 'black',
    elevation: 3,
  },
  alreadyView: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 90,
  },
  svgArrow: {
    top: 8,
    right: 35,
    marginTop: 40,
  },
  alreadyText: {
    fontSize: 16,
    marginRight: 40,
    textDecorationLine: 'underline',
    fontWeight: '300',
    marginTop: 40,
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  signUpButtonView: {
    // backgroundColor: '#DB3022',
    // top: 120,
    // marginHorizontal: 20,/
    // borderRadius: 50,
    // alignItems : 'center'
  },
  SignUpBtn: {
    borderRadius: 20,
    backgroundColor: '#DB3022',
    height: 50,
    marginTop: 150,
    // width: '100%',
    marginHorizontal: 20,
    alignItems: 'center',
    paddingTop: 12,
    shadowColor: 'black',
    elevation: 10,
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  signupBtnText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '300',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  bottomView: {
    flex: 1,
    // backgroundColor: 'green',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupIcons: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    bottom: 10,
    justifyContent: 'center',
  },
  btmText: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
});
