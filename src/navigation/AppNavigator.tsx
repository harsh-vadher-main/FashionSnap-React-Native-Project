import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import Shop from '../screens/Shop';
import Bottomtabs from './BottomTabs';
import WomenTops from '../screens/WomenTops';
import Women from '../screens/Women';
import FilterScreen from '../screens/FilterScreen';
import BrandScreen from '../screens/BrandScreen';
import DrawerTab from '../screens/DrawerTab';

export type RootstackParams = {
  SignUp: undefined;
  Login: undefined;
  Forgetpassword: undefined;
  HomeScreen: undefined;
  Shop: undefined;
  BottomTabs: undefined;
  WomenTops: undefined;
  Women: undefined;
  Filter: undefined;
  BrandScreen: undefined;
  Drawer: undefined;
};

const Rootstack = createNativeStackNavigator<RootstackParams>();
export const ShopScreen = () => {
  return (
    <Rootstack.Navigator
      initialRouteName="Shop"
      screenOptions={{headerShown: false}}>
      <Rootstack.Screen name="Shop" component={Shop} />
      <Rootstack.Screen name="Women" component={Women} />
      <Rootstack.Screen name="WomenTops" component={WomenTops} />
      <Rootstack.Screen name="Filter" component={FilterScreen} />
      <Rootstack.Screen name="BrandScreen" component={BrandScreen} />
    </Rootstack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Rootstack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerShown: false}}>
        <Rootstack.Screen name="SignUp" component={SignUp} />
        <Rootstack.Screen name="Login" component={Login} />
        <Rootstack.Screen name="Forgetpassword" component={ForgetPassword} />
        <Rootstack.Screen name="BottomTabs" component={Bottomtabs} />
        {/* <Rootstack.Screen name="Drawer" component={DrawerTab} /> */}
        <Rootstack.Screen name="Shop" component={Shop} />
      </Rootstack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
