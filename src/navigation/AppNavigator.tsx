import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import HomeScreen from '../screens/HomeScreen';
import Shop from '../screens/Shop';
import Bottomtabs from './BottomTabs';
import WomenTops from '../screens/WomenTops';
import Women from '../screens/Women';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
export type RootstackParams = {
  SignUp: undefined;
  Login: undefined;
  Forgetpassword: undefined;
  Home: undefined;
  Shop: undefined;
  BottomTabs: undefined;
  WomenTops: undefined;
  Women: undefined;
};
const Rootstack = createNativeStackNavigator<RootstackParams>();

export const Harsh = () => {
  return (
    <Rootstack.Navigator
      initialRouteName="Shop"
      screenOptions={{headerShown: false}}>
      <Rootstack.Screen name="Shop" component={Shop} />
      <Rootstack.Screen name="Women" component={Women} />
      <Rootstack.Screen name="WomenTops" component={WomenTops} />
    </Rootstack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Rootstack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignUp">
        <Rootstack.Screen name="SignUp" component={SignUp} />
        <Rootstack.Screen name="Login" component={Login} />
        <Rootstack.Screen name="Forgetpassword" component={ForgetPassword} />
        <Rootstack.Screen name="BottomTabs" component={Bottomtabs} />
        <Rootstack.Screen name="Shop" component={Shop} />
      </Rootstack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
