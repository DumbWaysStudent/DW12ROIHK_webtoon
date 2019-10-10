import React, { Component } from 'react'

import Login from './src/screens/Login'
import ForYou from './src/screens/ForYou'
import Detail from './src/screens/Detail'
import DetailEpisode from './src/screens/DetailEpisode'
import MyFavorite from './src/screens/MyFavorite'
import RootNavigator from './src/navigator/RootNavigator'
import BottomTabNav from './src/navigator/BottomTabNav'
import RootProfile from './src/navigator/RootProfile'


export default class App extends Component {
  render() {
    return <RootNavigator/>
  }
}
