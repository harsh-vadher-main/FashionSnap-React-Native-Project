import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import RedButton from '../common/RedButton';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import {FONTFAMILY} from '../themes/Theme';

const ForgetPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootstackParams>>();
  const [usename, setUsername] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateUser = (text: string) => {
    setUsername(text);
    if (text.includes('@gmail.com')) {
      setIsValid(true);
      seterrorMessage('');
    } else {
      seterrorMessage('Not a valid email adress .Should be your@gmail.com');
      setIsValid(false);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <SvgXml xml={icons().back} />
        </Pressable>
        <View>
          <Text style={styles.forgetpwheader}>Forget Password</Text>
        </View>

        <Text style={styles.text}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <View style={styles.textFieldView}>
          <Text style={styles.emailText}>E-mail</Text>
          <TextInput
            style={{
              fontSize: 17,
              marginHorizontal: 15,
              color: 'black',
              borderRadius: 10,
              fontWeight: '200',
              marginVertical: 10,
              borderWidth: 1,
              borderColor: isValid ? '#9B9B9B' : 'red',
            }}
            onChangeText={text => validateUser(text)}
          />
        </View>
        <View style={styles.btn}>
          <RedButton name="SEND" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  forgetpwheader: {
    fontSize: 34,
    marginVertical: 30,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    top: 20,
    backgroundColor: '#f5f5f5',
  },
  textFieldView: {
    backgroundColor: '#ffffff',
    width: '100%',
    top: 10,
    height: 90,
    borderRadius: 10,
  },
  emailText: {
    fontSize: 11,
    left: 20,
    fontFamily: FONTFAMILY.Poppins_Regular,
    top: 8,
    color: '#9B9B9B',
  },
  textInput: {},
  btn: {
    marginTop: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 0,
  },
});
