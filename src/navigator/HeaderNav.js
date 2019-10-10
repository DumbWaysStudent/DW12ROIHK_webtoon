import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../screens/Login'
import Detail from './../screens/Detail'
import DetailEpisode from '../screens/DetailEpisode';
import ContainProfile from '../components/ContainProfile';
import RootProfile from '../navigator/RootProfile';

// without Bottom Tab Navigator
const HeaderNav = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
          header: null
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({ navigation }) => ({
        header:null
      }),
    },
    DetailEpisode: {
      screen: DetailEpisode,
      navigationOptions: ({ navigation }) => ({
        header:null
      }),
    },
    ContainProfile: {
      screen: ContainProfile,
      navigationOptions: ({ navigation }) => ({
        header:null
      }),
    },
  });

export default createAppContainer(HeaderNav);