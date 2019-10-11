import { StyleSheet, Dimensions, Text, Share, Image, View, FlatList, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, 
  Button, Icon, Title, Content, List, ListItem, Thumbnail } from 'native-base';
  
import {account} from './../data/dummy'

export default class ContainProfile extends Component {
  


  render() {
    return (      
      <View style= {styles.ProfileForm}>
        <Thumbnail style={styles.ProfileImage}
          source={{uri: account.image}}/>         
       <Text style={styles.title}>{account.name}</Text>
      </View>
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

