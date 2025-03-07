import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Bag from '../screens/Bag';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootstackParams, ShopScreen} from './AppNavigator';
import DrawerTab from '../screens/DrawerTab';

interface BottomTabsProps {
  navigation: NativeStackNavigationProp<RootstackParams, 'BottomTabs'>;
}

const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation}: BottomTabsProps) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={DrawerTab}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().hometabbar} />
            ) : (
              <SvgXml xml={icons().unfocusedhome} />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SvgXml xml={icons().back} style={{marginHorizontal: 8}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <SvgXml xml={icons().search} style={{marginHorizontal: 8}} />
            </TouchableOpacity>
          ),
          headerTitle: 'Categories',
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusedcart} />
            ) : (
              <SvgXml xml={icons().unfocusedcart} />
            ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusedbag} />
            ) : (
              <SvgXml xml={icons().unfocusedbag} />
            ),
        }}
      />
      <Tab.Screen
        name="favourites"
        component={Favorites}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusedfavourites} />
            ) : (
              <SvgXml xml={icons().unfocusedfavourites} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgXml xml={icons().focusedprofile} />
            ) : (
              <SvgXml xml={icons().unfocusedprofile} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

