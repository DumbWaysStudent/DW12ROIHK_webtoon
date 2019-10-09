import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../screens/Login'
import Detail from './../screens/Detail'

// without Bottom Tab Navigator
const HeaderNav = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
          header:null
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({ navigation }) => ({
        header:null
      }),
    }
  });

export default createAppContainer(HeaderNav);