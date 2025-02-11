import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Signup from './Signup';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import ForgetPassword from './ForgetPassword';
import RedButton from '../common/RedButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootstackParams } from '../navigation/AppNavigator';
const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootstackParams>>();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={{flex: 1, marginHorizontal: 12}}>
        <ScrollView>
          <View style={styles.iconView}>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <SvgXml xml={icons().back} />
            </Pressable>
            <View style={styles.loginView}>
              <Text style={styles.loginText}>Login</Text>
            </View>
          </View>
          <View style={styles.inputFieldMainView}>
            <View style={styles.inputField}>
              <Text style={styles.emailText}>Email</Text>
              <TextInput style={styles.textInputView} />
            </View>
            <View style={styles.inputField2}>
              <Text style={styles.emailText}>Password</Text>
              <TextInput style={styles.textInputView} secureTextEntry />
            </View>
          </View>
          <View style={styles.forgetText}>
            <Pressable
              style={styles.forgetPassView}
              onPress={() => navigation.navigate('Forgetpassword')}>
              <Text style={styles.fogetText}>Forget your password </Text>
            </Pressable>
            <View>
              <Pressable onPress={() => navigation.navigate('Forgetpassword')}>
                <SvgXml xml={icons().rightArrow} style={styles.arrowIcon} />
              </Pressable>
            </View>
          </View>
          <View style={styles.LoginView}>
            <RedButton name="LOGIN" style={styles.loginBtn} />
          </View>
        </ScrollView>
        <View style={styles.text}>
          <Text style={{fontWeight: '400'}}>Or login with social account </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Pressable>
            <SvgXml xml={icons().google} />
          </Pressable>
          <Pressable>
            <SvgXml xml={icons().facebook} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginText: {
    fontSize: 34,
  },
  iconView: {
    marginTop: 20,
  },
  loginView: {
    marginTop: 40,
  },
  inputFieldMainView: {
    top: 60,
    height: 200,
  },
  inputField: {
    backgroundColor: '#ffffff',
    top: 20,
    paddingHorizontal: 15,
    borderRadius: 3,
    shadowColor: 'black',
    elevation: 3,
    shadowRadius: 3,
    marginHorizontal: 3,
  },
  textInputView: {
    color: 'black',
    fontSize: 18,
    fontWeight: '200',
  },
  emailText: {
    fontSize: 12,
    top: 5,
    paddingHorizontal: 5,
    color: '#9B9B9B',
    fontWeight: '300',
  },
  inputField2: {
    backgroundColor: '#ffffff',
    top: 35,
    paddingHorizontal: 15,
    borderRadius: 3,
    shadowColor: 'black',
    elevation: 3,
    marginHorizontal: 3,
  },
  forgetText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 40,
  },
  forgetPassView: {
    paddingHorizontal: 20,
  },
  arrowIcon: {
    marginTop: 5,
    right: 5,
  },
  fogetText: {
    fontSize: 14,
    fontWeight: '400',
  },
  LoginView: {
    top: 100,
  },
  loginBtn: {},
  loginBtnText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 15,
  },
  text: {
    alignItems: 'center',
  },
});
