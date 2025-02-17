import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
export type DrawerTabParams = {
  Home: undefined;
  Profile: undefined;
};
const Drawer = createDrawerNavigator<DrawerTabParams>();

export const DrawerTab = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
export default DrawerTab;

const styles = StyleSheet.create({});
