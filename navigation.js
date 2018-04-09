import { Platform } from 'react-native';
import React from 'react';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import About from './About';
import StoreIndex from './Stores';
import StoreProducts from './StoreProducts';
import Contact from './ContactUs';
import Icon from 'react-native-vector-icons/FontAwesome';
export default Tab = TabNavigator(
  {
    About: { screen: About,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: () =><Icon name="eye" size={30} />,
      }
      },
    Stores: { screen: StoreIndex,
          navigationOptions: {
        tabBarLabel: 'Stores',
        tabBarIcon: () =><Icon name="list" size={30} />,
      } },
      ContactUs: { screen: Contact,
        navigationOptions: {
          tabBarLabel: 'Contact us',
          tabBarIcon: () =><Icon name="compress" size={30} />,
        } },
  },
  {
   tabBarPosition: "bottom",
   swipeEnabled: true,
   tabBarOptions: {
     activeTintColor: "#f2f2f2",
     showIcon: true,
     showLabel: true,
     activeBackgroundColor: "#ba1013",
     inactiveTintColor: "#666",
     labelStyle: {
       fontSize: 8,
     }
  }})
