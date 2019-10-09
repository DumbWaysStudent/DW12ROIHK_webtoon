import React, { Component } from 'react'

import Login from './src/screens/Login'
import ForYou from './src/screens/ForYou'
import Detail from './src/screens/Detail'
import RootNavigator from './src/navigator/RootNavigator'


export default class App extends Component {
  render() {
    //return <ForYou/>
    //return <Login/>
    //return <RootNavigator/>
    return <Detail/>
  }
}
