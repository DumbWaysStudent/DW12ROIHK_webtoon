import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderNav from './HeaderNav'
import BottomTabNav from './BottomTabNav'

const RootNavigator = createStackNavigator({
  HeaderNav:{
    screen: HeaderNav,
  navigationOptions: ({ navigation }) => ({
    header: null
  })
},
  BottomTabNav:{
    screen: BottomTabNav,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
export default createAppContainer(RootNavigator);
