import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList, AsyncStorage } from 'react-native';
import {
  Container, Content, Body, Item, Button, Input, Icon, Thumbnail, ListItem, Header,
  Left, Title, Right
} from 'native-base'

import { connect } from 'react-redux'
import * as actionMyEpisodes from './../redux/actions/actionMyEpisodes'
import * as actionMyWebtoons from './../redux/actions/actionMyWebtoons'

class EditWebtoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.webtoon.title,
      id: this.props.navigation.state.params.webtoon.id,
      data: [],
      param:[],
      newData:[],
      addData: {
        //ep: this.props.navigation.state.params.addEpisode.ep,
        //date: this.props.navigation.state.params.addEpisode.date,
        //url: this.props.navigation.state.params.addEpisode.url,
      }
    };
  }

  async deleteWebtoon(){
    await this.props.handleDeleteMyWebtoons(this.state.param)
    await this.props.navigation.navigate('MyCreation')
  }

  handleMyCreation(title) {
    this.props.navigation.navigate('MyCreation')
  }
  async handleCreateEpisode() {
    const newData = {title: `ep ${this.state.data.length + 1}`, image: 'https://via.placeholder.com/1080'}
    await this.addData(newData)
    await this.userData()
    await this.props.navigation.navigate('CreateEpisode', { 
      episode: this.state.newData,
      webtoon: this.state.id
     })
  }
  handleEditEpisode(episode) {
    this.props.navigation.navigate('EditEpisode', { 
      episode: episode, 
      webtoon: this.state.id
    })
  }
  changeTitle(text) {
    this.setState({ search: text })
    //this.setState({title: this.props.navigation.state.params.webtoon.title})
  }

 
     componentDidMount() {
    this.userData()
    
   }
 
   async userData(){
     const param= {
       token: await AsyncStorage.getItem('token'),
       user: await AsyncStorage.getItem('userId'),
       webtoon: await this.state.id
     } 
     
     await this.setState({param: param})
     await this.props.handleGetMyEpisodes(this.state.param)
     await this.setState({data: this.props.myEpisodes.episodes.data})
   }
   
   async componentWillReceiveProps(nextProps) {
    if (nextProps.myEpisodes.episodes.data !== this.props.myEpisodes.episodes.data) {
      await this.props.handleGetMyEpisodes(this.state.param)
      await this.setState({ data: this.props.myEpisodes.episodes.data })
    }
  }
   
  async addData(newData){
    
    const param = {
      ...this.state.param,
      data: newData
    }
    await this.props.handleAddMyEpisodes(param)
    await this.setState({newData: this.props.myEpisodes.episodes.data})
   // await console.log(this.state.newData);
  }
 

  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent
              onPress={() => this.handleMyCreation()} >
              <Icon name='arrow-back'
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Edit Webtoon</Title>
          </Body>
          <Right>
            <Button transparent
              onPress={() => this.handleMyCreation(this.state.title)}>
              <Icon name='checkmark' />
            </Button>
          </Right>

        </Header>
        <Content style={styles.container}>
          <View style={styles.formTitle}>

            <Text style={styles.title}>Title</Text>
            <Item rounded>
              <Input
                value={this.state.title}
                onChangeText={(text) => this.setState({ title: text })}
              />
            </Item>
          </View>
          <View style={styles.formEp}>
            <Text style={styles.title}>Episode</Text>
            <SafeAreaView style={styles.form}>
              <FlatList
                data={this.state.data}
                renderItem={({ item }) =>
                  <ListItem thumbnail>
                    <Button transparent onPress={() => this.handleEditEpisode(item)}>
                      <Thumbnail square source={{ uri: item.image }} /></Button>
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note numberOfLines={1}>{item.updatedAt}</Text>
                    </Body>
                  </ListItem>
                }
                keyExtractor={item => item.id}
                inverted />

            </SafeAreaView>
          </View>
          <Button block square style={{ marginVertical: 5 }}
            onPress={() => this.handleCreateEpisode()}>
            <Text style={{ color: '#ffffff' }} >+ Add Episode</Text>
          </Button>
          <Button block square danger
            style={{ marginVertical: 5 }}
            onPress={() => this.deleteWebtoon()}>
            <Text style={{ color: '#ffffff' }} >Delete Webtoon</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10
  },
  formTitle: {
    marginVertical: 10
  },
  formEp: {
    padding: 5,
  },
  title: {
    padding: 5,
    width: 200,
    fontSize: 20,
  },
  Header: {
    backgroundColor: '#ff6e6e',
  },
})


const mapStateToProps = state => {
  return {
    myEpisodes: state.myEpisodes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetMyEpisodes: (param) => dispatch(actionMyEpisodes.handleGetMyEpisodes(param)),
    handleAddMyEpisodes: (param) => dispatch(actionMyEpisodes.handleAddMyEpisodes(param)),
    handleDeleteMyWebtoons: (param) => dispatch(actionMyWebtoons.handleDeleteMyWebtoons(param))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWebtoon);
