import React, { Component } from 'react'

import Login from './src/screens/Login'
import ForYou from './src/screens/ForYou'
import Detail from './src/screens/Detail'
import DetailEpisode from './src/screens/DetailEpisode'
import MyFavorite from './src/screens/MyFavorite'
import RootNavigator from './src/navigator/RootNavigator'


export default class App extends Component {
  render() {
    return <MyFavorite/>
  }
}
