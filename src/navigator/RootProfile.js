import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, 
    Button, Icon, Input, Title, Content, Card, Thumbnail, Textarea } from 'native-base';


//import Profile from './../screens/Profile'
import EditProfile from './../screens/EditProfile';
import ContainProfile from './../components/ContainProfile';

export default class RootProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
             title: 'Profile',
                icon: 'create',
          account:{
            name: 'Your name',
            image: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'
          },
          isEdit: false
  }
}
  mode(){
    this.setState(prevState =>({
      icon: prevState.icon === 'create' ? 'checkmark' : 'create',
      title: prevState.title === 'Profile' ? 'Edit Profile' : 'Profile',
      isEdit: !prevState.isEdit
    }));
  }  
  
  render() {
      let mode;
    if(this.state.isEdit){
        mode = <EditProfile />
    } else{
        mode = <ContainProfile accountName= {this.state.account.name} 
        accountImage= {this.state.account.image}/>
    }
    return (
    <Container>
        <Header>
        <Body>
          <Title style={styles.title}>{this.state.title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name={this.state.icon}
            onPress={()=> this.mode()}/>
          </Button>
        </Right>
        </Header>        
         {mode}
         
    </Container>
    );

  }
}

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width,
      padding: 4
    },
    form: {
      padding: 5
    },
    title: {
      fontSize: 20,
    },
    allText: {
      fontSize: 15,
    },
    ProfileImage:{
      width: 150, 
      height: 150,
      borderRadius: 150/2
    },  
    ProfileForm: {
      marginVertical: 50,
      alignItems: 'center'
      
    },
  })
  
  