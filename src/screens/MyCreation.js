import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import {
  Container, Header, Left, Body,
  Button, Icon, Title, Thumbnail, List, ListItem, Fab, Card, Right
} from 'native-base';

import { connect } from 'react-redux'
import * as actionMyWebtoons from './../redux/actions/actionMyWebtoons'


class MyCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      param: [],
      data: [],

    };
  }

  async handleCreateWebtoon() {
    const params = {
      ...this.state.param,
      data: { title: `webtoon ${this.state.data.length + 1}`, image: 'https://via.placeholder.com/1080' }
    }
    await this.props.handleAddMyWebtoons(params)

    await this.props.navigation.navigate('CreateWebtoon', {
      webtoon: this.props.myWebtoons.webtoons.data.result,
    })
  }

  handleEditWebtoon(item) {
    this.props.navigation.navigate('EditWebtoon', { webtoon: item })
  }

  handleProfile() {
    this.props.navigation.navigate('Profile')
  }

  async componentWillMount() {
    this.userData()


  }

  async userData() {
    const param = {
      token: await AsyncStorage.getItem('token'),
      user: await AsyncStorage.getItem('userId')
    }

    await this.setState({ param: param })
    await this.props.handleGetMyWebtoons(param)
    await this.setState({ data: this.props.myWebtoons.webtoons.data })
  }


  // async componentWillReceiveProps(nextProps) {
  //   if (nextProps.myWebtoons.webtoons.data !== this.props.myWebtoons.webtoons.data) {
  //     await this.props.handleGetMyWebtoons(this.state.param)
  //   //  await alert('here')
  //  //   await this.setState({ data: this.props.myWebtoons.webtoons.data })
  //   }
  // }
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
            dataArray={this.state.data}
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
    handleGetMyWebtoons: (param) => dispatch(actionMyWebtoons.handleGetMyWebtoons(param)),
    handleAddMyWebtoons: (param) => dispatch(actionMyWebtoons.handleAddMyWebtoons(param)),
    handleDeleteMyWebtoons: (param) => dispatch(actionMyWebtoons.handleDeleteMyWebtoons(param))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCreation);
