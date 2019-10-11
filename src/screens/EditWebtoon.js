import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { Container, Content, Body, Item, Button, Input, Icon, List, Thumbnail, ListItem, Header,
Left, Title, Right } from 'native-base'

export default class EditWebtoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data : [{
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
      }, {
        ep: 5,
        date: '3 mei 2019',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'
      }],
    };
  }

  handleMyCreation() {
    this.props.navigation.navigate('MyCreation')
  }
  handleCreateEpisode() {
    this.props.navigation.navigate('CreateEpisode')
  }
  
  render() {
    return (
      <Container>
        <Header>
        <Left>
            <Button  transparent
            onPress={()=> this.handleMyCreation()} >
              <Icon name='arrow-back'
               />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Edit Webtoon</Title>
            </Body>
            <Right>
            <Button  transparent 
            onPress={()=> this.handleMyCreation()}>
              <Icon name='checkmark'/>
              </Button>
            </Right>

          </Header>
          <Content  style={styles.container}>
          <View style={styles.formTitle}>
              
            <Text style={styles.title}>Title</Text>
          <Item rounded>
            <Input 
              value={this.state.search}
              onChangeText={(text) => this.setState({ search: text })}
                />
            </Item>
          </View>
          <View style={styles.formEp}>
            <Text style={styles.title}>Episode</Text>
      <SafeAreaView style={styles.form}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => 
          <ListItem thumbnail>
            <Button transparent onPress = {()=> alert('a')}>
          <Thumbnail square source={{uri: item.url}}/></Button>
            <Body>
              <Text>Ep {item.ep}</Text>
              <Text note numberOfLines={1}>{item.date}</Text>
            </Body>
          </ListItem>
          }
          keyExtractor={item => item.ep}
          inverted/>
          
        </SafeAreaView>
        </View>
          <Button block square style={{marginVertical:5}}
          onPress = {()=> this.handleCreateEpisode()}>
            <Text style={{color:'#ffffff'}} >+ Add Episode</Text>
          </Button>
          <Button block square danger 
           style={{marginVertical:5}}
           onPress = {()=> alert('Delete Episode')}>
            <Text style={{color:'#ffffff'}} >Delete Webtoon</Text>
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
  formTitle :{
    marginVertical: 10
  },
  formEp: {
    padding: 5,
  },  
  title: {
    padding: 5,
    width: 200,
    fontSize: 20,
  }
})