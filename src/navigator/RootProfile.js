import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { Container, Header, Left, Body, Right, 
    Button, Icon, Input, Title, Content, Card, Thumbnail, List, ListItem } from 'native-base';
import ImagePicker from 'react-native-image-picker';


import ContainProfile from './../components/ContainProfile';

export default class RootProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Profile',
            icon: 'create',

            name: 'Your name',
            filePath: {uri:'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'},
          isEdit: false
  }
}
chooseFile = () => {
  var options = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      let source = response;
      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      this.setState({
        filePath: source,
      });
    }
  });
};

  mode(){
    this.setState(prevState =>({
      icon: prevState.icon === 'create' ? 'checkmark' : 'create',
      title: prevState.title === 'Profile' ? 'Edit Profile' : 'Profile',
      isEdit: !prevState.isEdit
    }));
  }  
  handleLogout(){
    this.props.navigation.navigate('Login')
  }
  handleMyCreation(){
    this.props.navigation.navigate('MyCreation')
  }
  
  render() {
      let mode;
    if(this.state.isEdit){
        mode = (
        <Content style={styles.container}>
          <View style= {styles.ProfileForm}>
            <Button transparent bordered rounded style={styles.ProfileImage}
              title='Choose File'
              onPress={this.chooseFile.bind(this)} >
            <Thumbnail style={styles.ProfileImage}
              source={{uri: this.state.filePath.uri }}/></Button>
            <Card style= {styles.textInputBox}>
              <Input bordered style= {styles.textInput}
                value={this.state.name}
                onChangeText={(text) => this.setState({ name: text })}
              />
              </Card>
          </View>
        </Content>
       )
    } else{
        mode = (
          <Content style={styles.container}>
          <ContainProfile accountName={this.state.name} accountImage={this.state.filePath.uri}/>
            <SafeAreaView style={styles.form}>
            <List>
              <ListItem selected onPress={()=> this.handleMyCreation()}>
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
          )
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
      fontSize: 20,
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
    textInputBox:{
    width:200,
    height:50,
    }, 
    textInput:{
    fontSize: 20,
    fontSize: 20,
    alignSelf: 'center'
    
}
  })
  
  