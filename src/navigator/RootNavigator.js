 import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderNav from './HeaderNav'
 //import Login from './../screens/Login'
 import BottomTabNav from './BottomTabNav'

 const RootNavigator = createSwitchNavigator({
   HeaderNav,
   BottomTabNav
 });
export default createAppContainer(RootNavigator);
