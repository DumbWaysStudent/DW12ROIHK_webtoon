import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Item, Input, Button, Icon } from 'native-base'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      icon: 'eye-off',
      passMode : true
    };
  }

  validate = (text) => {
    //console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
      alert("Email is Not Correct");
      this.setState({email:text})
    return false;
      }
    else {
      this.setState({email:text})
      alert("Email is Correct");
    }
    }

  modeIcon(){
    this.setState(prevState =>({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      passMode: !prevState.passMode
    }));
  }

  render() {
    const {label, icon, onChange} = this.props;
    return (  
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.marginTitle, styles.marginSubTitle]}>
            <Text style={styles.title}>LOG IN</Text>
            <Text style={styles.subTitle}>Log in with your WEBTOON accoun</Text>
          </View>
          <View style={styles.form}>
            <Text>Email</Text>
          <Item style={styles.formItem}>
            <Input
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
              autoCapitalize='none'
              keyboardType='email-address' />
          </Item >
          <Text>Password</Text>
          <Item style={styles.formItem}>
            <Input 
              secureTextEntry={this.state.passMode}
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
              keyboardType='default' />
              <Icon name = {this.state.icon} onPress={() => this.modeIcon()} />
          </Item>
          <Button block rounded onPress={() => this.validate(this.state.email)}>
             <Text style={{color:'#ffffff'}}>Log In</Text></Button>
            </View>
          </View>
      </SafeAreaView>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
     //flex: 1,
    width: Dimensions.get('window').width,
    paddingHorizontal: 10
  },
  marginTitle: {
    alignItems: 'center',
    padding: 10
  },
  marginSubTitle: {
    marginTop: 80,
    marginBottom: 60
  },  
  title: {
    fontSize: 50
  },
    subTitle: {
      fontSize: 20
    },
    formItem:{
      marginBottom : 10
    }
})