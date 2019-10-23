import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async passLogin() {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      this.props.navigation.navigate('BottomTabNav')
    }
    else{
        this.props.navigation.navigate('Login')
    }
  }

  componentDidMount(){
    this.passLogin()
  }

  render() {
    return (
      <View>
        <Text> Loading </Text>
      </View>
    );
  }
}
