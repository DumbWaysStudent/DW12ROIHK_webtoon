import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon } from 'native-base'

//import LoginSc from './../screens/Login'
import ForYouSc from './../screens/ForYou'
import FavoriteSc from './../screens/Favorite'
import ProfileSc from './../screens/Profile'

const Profile = createStackNavigator({
  Profile: {screen: ProfileSc}
});
const Favorite = createStackNavigator({
  Favorite: {screen: FavoriteSc}
});
const ForYou = createStackNavigator({
  ForYou: {screen: ForYouSc}
})

const RootNavigator = createBottomTabNavigator(
  {
    ForYou: {screen: ForYou},
    Favorite: {screen: Favorite},
    Profile: {screen: Profile}
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
export default createAppContainer(RootNavigator);
