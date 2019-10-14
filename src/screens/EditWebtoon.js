import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import {
  Container, Content, Body, Item, Button, Input, Icon, Thumbnail, ListItem, Header,
  Left, Title, Right
} from 'native-base'

export default class EditWebtoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.webtoon.title,
      id: this.props.navigation.state.params.webtoon.id,
      data: [{
        ep: 1,
        date: '1 januari 2019',
        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        ep: 2,
        date: '23 febuari 2019',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015644.jpg'
      }, {
        ep: 3,
        date: '16 maret 2019',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015718.jpg'
      }, {
        ep: 4,
        date: '5 april 2019',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015741.jpg'
      }],
      addData: {
        //ep: this.props.navigation.state.params.addEpisode.ep,
        //date: this.props.navigation.state.params.addEpisode.date,
        //url: this.props.navigation.state.params.addEpisode.url,
      }
    };
  }

  handleMyCreation(title) {
    this.props.navigation.navigate('MyCreation')
  }
  handleCreateEpisode() {
    const episode = this.state.data.length + 1;
    this.props.navigation.navigate('CreateEpisode', { episode: `Ep ${episode}` })
  }
  handleEditEpisode(episode) {
    this.props.navigation.navigate('EditEpisode', { episode: `Ep ${episode}` })
  }
  changeTitle(text) {
    this.setState({ search: text })
    //this.setState({title: this.props.navigation.state.params.webtoon.title})
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
                    <Button transparent onPress={() => this.handleEditEpisode(item.ep)}>
                      <Thumbnail square source={{ uri: item.url }} /></Button>
                    <Body>
                      <Text>Ep {item.ep}</Text>
                      <Text note numberOfLines={1}>{item.date}</Text>
                    </Body>
                  </ListItem>
                }
                keyExtractor={item => item.ep}
                inverted />

            </SafeAreaView>
          </View>
          <Button block square style={{ marginVertical: 5 }}
            onPress={() => this.handleCreateEpisode()}>
            <Text style={{ color: '#ffffff' }} >+ Add Episode</Text>
          </Button>
          <Button block square danger
            style={{ marginVertical: 5 }}
            onPress={() => alert('Delete Webtoon')}>
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