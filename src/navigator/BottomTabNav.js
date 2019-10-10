import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon } from 'native-base'

import ForYou from './../screens/ForYou'
import Favorite from './../screens/MyFavorite'
import Profile from './../screens/Profile'


const BottomTabNav = createBottomTabNavigator(
  {
    ForYou: {
        screen: ForYou,
        navigationOptions: ({ navigation }) => ({
            header:null
        }),
      },
    Favorite: {
          screen: Favorite,
          navigationOptions: ({ navigation }) => ({
              header:null
          }),
        },
    Profile: {
            screen: Profile,
            navigationOptions: ({ navigation }) => ({
                header:null
            }),
          }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'ForYou') {
          iconName = `square-outline`;
        } else if (routeName === 'Favorite') {
          iconName = `star-outline`;
        } else if (routeName === 'Profile') {
          iconName = `contact`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color='white' />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor:'tomato', 
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(BottomTabNav);
