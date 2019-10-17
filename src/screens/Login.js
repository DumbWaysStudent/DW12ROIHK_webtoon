import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Item, Input, Button, Icon, Container } from 'native-base';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      icon: 'eye-off',
      passMode: true
    };
  }

  validate = (text) => {
    //console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (reg.test(text) === false) {
      alert("Email is Not Correct");
      this.setState({ email: text })
      return false;
    }
    else {
      this.setState({ email: text })
      this.handleLogin()
    }
  }

  modeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      passMode: !prevState.passMode
    }));
  }


  handleLogin() {
    this.props.navigation.navigate('BottomTabNav')
  }

  demo() {
    this.setState({ password: 'asd' })
    this.setState({ email: 'this@mode.demo' })
  }

  render() {
    const { label, icon, onChange } = this.props;
    return (
      <Container style={styles.container}>
        <SafeAreaView>
          <View >
            <View style={[styles.marginTitle, styles.marginSubTitle]}>
              <Text style={styles.title}>LOGIN</Text>
              <Text style={styles.subTitle}>Log in with your WEBTOON account</Text>
            </View>
            <View>
              <Text>Email</Text>
              <Item regular
                style={styles.formItem}>
                <Input
                  value={this.state.email}

                  onChangeText={(text) => this.setState({ email: text })}
                  autoCapitalize='none'
                  keyboardType='email-address' />
              </Item >
              <Text>Password</Text>
              <Item regular
                style={styles.formItem}>
                <Input
                  secureTextEntry={this.state.passMode}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({ password: text })}
                  keyboardType='default' />
                <Icon name={this.state.icon} onPress={() => this.modeIcon()} />
              </Item>
              <Button block rounded light danger
                onPress={() => this.validate(this.state.email)}>
                <Text style={{ color: '#ffffff' }}>Log In</Text></Button>
              <Text style={styles.TextMode}
                onPress={() => this.demo()}>Demo Mode</Text>
            </View>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    backgroundColor: '#f5f2f2'
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
  formItem: {
    marginBottom: 10
  },
  TextMode: {
    marginTop: 20,
    color: 'blue',
    alignSelf: 'center',
  }
})