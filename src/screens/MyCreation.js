import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { Container, Header, Left, Body, 
    Button, Icon, Title, Thumbnail, List, ListItem, Fab, Card } from 'native-base';

export default class MyCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        banners : [{
            id: 0,
            sumEpisode: 100,
            title: 'The Secret of Angel',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
          }, {
            id: 1,
            sumEpisode: 102,
            title: 'Pasutri Gaje',
            url: 'https://webtoons-static.pstatic.net/image/pc/home/og_id.jpg?dt=2019090201'
          }, {
            id: 2,
            sumEpisode: 20,
            title: 'Young Mom',
            url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015644.jpg'
          }, {
            id: 3,
            sumEpisode: 15,
            title: 'Young Dad',
            url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015718.jpg'
          }, {
            id: 4,
            sumEpisode: 10,
            title: 'Old Mom',
            url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015741.jpg'
          }, {
            id: 5,
            sumEpisode: 3,
            title: 'Young Dad',
            url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'
          }],
    };
  }
  handleCreateWebtoon(){
    this.props.navigation.navigate('CreateWebtoon')
  }
  handleEditWebtoon(item){
    this.props.navigation.navigate('EditWebtoon', {webtoon: item})
  }
  handleProfile(){
    this.props.navigation.navigate('Profile')
  }
  render() {
    return (
      <Container>
        <Header style={styles.Header}>
        <Left>
            <Button  transparent>
              <Icon name='arrow-back'
               onPress={()=> this.handleProfile()} />
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
          <Button onPress= {() => this.handleEditWebtoon(item)}>
        <Thumbnail square source={{uri: item.url}}/>
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
  Slideshow:{
    width: 250,
  },
  Header:{
    backgroundColor: '#ff6e6e',
  },
})