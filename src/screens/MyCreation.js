import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import {
  Container, Header, Left, Body,
  Button, Icon, Title, Thumbnail, List, ListItem, Fab, Card
} from 'native-base';

import { connect } from 'react-redux'
import * as actionMyWebtoons from './../redux/actions/actionMyWebtoons'


class MyCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {

      banners: [],
      
    };
  }

  handleCreateWebtoon() {
    //const test = this.props.myWebtoons.isSuccess
    //alert(`${test}`)
    this.props.navigation.navigate('CreateWebtoon')
  }

  handleEditWebtoon(item) {
    this.props.navigation.navigate('EditWebtoon', { webtoon: item })
  }

  handleProfile() {
    this.props.navigation.navigate('Profile')
  }

  async componentDidMount() {
   this.userData()
   
    
  }

  async userData(){
    const param= {
      token: await AsyncStorage.getItem('token'),
      user: await AsyncStorage.getItem('userId')
    } 
    await this.props.handleGetMyWebtoons(param)
    await this.setState({banners: this.props.myWebtoons.webtoons.data})
  }

    render() {
    
      return (
        <Container>
          <Header style={styles.Header}>
            <Left>
              <Button transparent>
                <Icon name='arrow-back'
                  onPress={() => this.handleProfile()} />
              </Button>
            </Left>
            <Body>
              <Title style={styles.title}>My Webtoon Creation</Title>
            </Body>
          </Header>
          <View style={styles.formAll}>
            <List
              dataArray={this.state.banners}
              renderRow={(item) =>
                <ListItem thumbnail style={styles.formItem}>
                  <Left>
                    <Button onPress={() => this.handleEditWebtoon(item)}>
                      <Thumbnail square source={{ uri: item.image }} />
                    </Button>
                    <Body>
                      <Text >{item.title}</Text>
                      <Text note numberOfLines={1}>{item.sumEpisode} Episode</Text>
                    </Body>
                  </Left>
                </ListItem>
              }>
            </List>
            <Fab
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={() => this.handleCreateWebtoon()}>
              <Icon name="add" />
            </Fab>
          </View>
        </Container>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width,
      paddingHorizontal: 10
    },
    formItem: {
      padding: 10
    },
    formAll: {
      marginTop: 10,
      flex: 1,
    },
    title: {
      padding: 5,
      fontSize: 20,
    },
    Slideshow: {
      width: 250,
    },
    Header: {
      backgroundColor: '#ff6e6e',
    },
  })

  const mapStateToProps = state => {
    return {
      myWebtoons: state.myWebtoons
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      handleGetMyWebtoons: (param) => dispatch(actionMyWebtoons.handleGetMyWebtoons(param))
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyCreation);
