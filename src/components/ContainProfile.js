import { StyleSheet, Dimensions, Text, Share, Image, View, FlatList, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, 
  Button, Icon, Title, Content, List, ListItem, Thumbnail } from 'native-base';
  
import {account} from './../data/dummy'

export default class ContainProfile extends Component {
  
  handleLogout(){
    this.props.navigation.navigate('Login')
  }

  render() {
    return (      
      <Content style={styles.container}>
      <View style= {styles.ProfileForm}>
        <Thumbnail style={styles.ProfileImage}
          source={{uri: account.image}}/>         
       <Text style={styles.title}>{account.name}</Text>
      </View>

    <SafeAreaView style={styles.form}>
        <List>
          <ListItem selected>
            <Left>
              <Text style={styles.allText}>My Webtoon Creation</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem selected onPress={()=> this.handleLogout()}>
            <Left>
              <Text style={styles.allText}>Log Out</Text>
            </Left>
          </ListItem>
            
          </List>
      </SafeAreaView>
      </Content>

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

