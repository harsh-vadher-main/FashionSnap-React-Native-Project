import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Women from './Women';
import Men from '../screens/InnerScreens/Men';
import Kids from '../screens/InnerScreens/Kids';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams} from '../navigation/AppNavigator';
import {Header} from '@react-navigation/elements';
import HeaderTop from '../common/HeaderTop';
import {icons} from '../utils/icons';

interface ShopProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'Shop'>;
}
const tab = createMaterialTopTabNavigator();
const Shop = ({navigation}: ShopProps) => {
  return (
    <>
      <HeaderTop text="categories" btn={icons().search} />
      <tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: '#DB3022',
            height: 3,
          },
        }}>
        <tab.Screen name="Women" component={Women} />
        <tab.Screen name="Men" component={Men} />
        <tab.Screen name="Kids" component={Kids} />
      </tab.Navigator>
    </>
  );
};

export default Shop;

const styles = StyleSheet.create({});

