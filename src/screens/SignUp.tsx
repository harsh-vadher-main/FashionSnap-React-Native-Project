import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import {FONTFAMILY, FONTSIZE} from '../themes/Theme';

interface SignUpProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'SignUp'>;
}

export default function Signup({navigation}: SignUpProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<any>('');
  const [passwordError, setPasswordError] = useState<any>('');

  const validateField = (field: string, setError: (msg: string) => void) => {
    if (field == 'email') {
      if (!field.trim()) {
        setError('Email is Required!');
      } else {
        setError('');
      }
    } else if (field == 'name') {
      if (!field.trim()) {
        setError('Name is Required');
      } else {
        setError('');
      }
    } else {
      if (!field.trim()) {
        setError('Password is Required');
      } else {
        setError('');
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.firstView}>
          <View style={styles.signupView}>
            <Text style={styles.signUptext}>Sign up</Text>
          </View>
        </View>
        <View style={styles.secondView}>
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Name</Text>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              onBlur={() => validateField(name, setNameError)}
            />
          </View>
          {emailError ? (
            <Text style={styles.errorTextEmail}>{emailError}</Text>
          ) : null}
          <View style={styles.emailView}>
            <Text style={styles.emailText}>E-mail</Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              onBlur={() => validateField(email, setEmailError)}
            />
          </View>
          {passwordError ? (
            <Text style={styles.errorTextPassword}>{passwordError}</Text>
          ) : null}
          <View style={styles.passwordView}>
            <Text style={styles.passwordText}>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              onBlur={() => validateField(password, setPasswordError)}
            />
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
        <View style={styles.bottomView}>
          <Text style={styles.btmText}>Or sign up with social account </Text>
        </View>
        <View style={styles.signupIcons}>
          <SvgXml xml={icons().google} />
          <SvgXml xml={icons().facebook} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstView: {
    top: 20,
    marginHorizontal: 10,
  },
  signupView: {
    marginTop: 50,
  },
  signUptext: {
    fontSize: 34,
    fontFamily: FONTFAMILY.Poppins_Bold,
  },
  secondView: {
    top: 80,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  nameView: {
    backgroundColor: '#ffffff',
    width: '95%',
    marginHorizontal: 5,
    height: 74,
    borderRadius: 10,
    elevation: 10,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.1,
  },
  nameText: {
    fontSize: 11,
    left: 20,
    top: 10,
    color: '#9B9B9B',
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  errorText: {
    fontFamily: FONTFAMILY.Poppins_Regular,
    fontSize: FONTSIZE.size_14,
    color: 'red',
    marginVertical: 15,
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
    elevation: 10,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.1,
    backgroundColor: '#ffffff',
    marginTop: 15,
  },
  emailText: {
    fontSize: 11,
    left: 20,
    top: 10,
    color: '#9B9B9B',
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  errorTextEmail: {
    color: 'red',
    fontFamily: FONTFAMILY.Poppins_Regular,
    fontSize: FONTSIZE.size_14,
    top: 10,
  },
  passwordView: {
    width: '95%',
    height: 74,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 10,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.1,
    marginTop: 15,
    backgroundColor: '#ffffff',
  },
  passwordText: {
    fontSize: 11,
    left: 20,
    top: 10,
    color: '#9B9B9B',
    fontFamily: FONTFAMILY.Poppins_Medium,
  },
  errorTextPassword: {
    color: 'red',
    fontFamily: FONTFAMILY.Poppins_Regular,
    fontSize: FONTSIZE.size_14,

    top: 10, // marginTop: 15,
  },
  textInputView: {
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 50,
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
    marginTop: 100,
  },
  SignUpBtn: {
    borderRadius: 20,
    backgroundColor: '#DB3022',
    height: 50,
    // marginTop: 70,
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
    top: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btmText: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: FONTFAMILY.Poppins_Regular,
  },
  signupIcons: {
    top: 120,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
