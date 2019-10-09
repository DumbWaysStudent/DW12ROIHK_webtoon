 import { createAppContainer, createSwitchNavigator } from 'react-navigation';

 import HeaderNav from './HeaderNav'
 import BottomTabNav from './BottomTabNav'

 const RootNavigator = createSwitchNavigator({
   HeaderNav,
   BottomTabNav
 });
export default createAppContainer(RootNavigator);
