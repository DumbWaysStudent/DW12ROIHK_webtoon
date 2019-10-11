import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { Container, Content, Body, Item, Button, Input, Icon, List, Thumbnail, ListItem, Header,
Left, Title, Right } from 'native-base'

export default class CreateEpisode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        EpisodeName: '',
      data : [{
        id: 1,
        fileName: 'dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg',
        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        id: 2,
        fileName: '23 febuari 2019',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015644.jpg'
      }, {
        id: 3,
        fileName: '2153697_20170227015644.jpg',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015718.jpg'
      }, {
        id: 4,
        fileName: '2153697_20170227015741.jpg',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015741.jpg'
      }, {
        id: 5,
        fileName: '2153697_20170227015800.jpg',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'
      }],
    };
  }

  handleCreateWebtoon() {
    this.props.navigation.navigate('CreateWebtoon')
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
            onPress={()=> this.props.navigation.goBack(null)} >
              <Icon name='arrow-back'
               />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Create Episode</Title>
            </Body>
            <Right>
            <Button  transparent 
            onPress={()=> this.handleCreateWebtoon()}>
              <Icon name='checkmark'/>
              </Button>
            </Right>

          </Header>
          <Content  style={styles.container}>
          <View style={styles.formTitle}>
              
            <Text style={styles.title}>Name</Text>
          <Item rounded>
            <Input
              value={this.state.EpisodeName}
              onChangeText={(text) => this.setState({ EpisodeName: text })}
                />
            </Item>
          </View>
          <View style={styles.formEp}>
            <Text style={styles.title}>Add Images</Text>
      <SafeAreaView style={styles.form}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => 
          <ListItem thumbnail>
            <Button transparent onPress = {()=> alert('a')}>
          <Thumbnail square source={{uri: item.url}}/></Button>
            <Body>
              <Text>{item.id}. {item.fileName}</Text>
              <Button small block 
              style={{width: 80}}
              onPress = {()=> alert('delete image')}>
              <Text style={styles.ButtonText}> delete </Text></Button>
            </Body>
          </ListItem>
          }
          keyExtractor={item => item.id}
          />
          
        </SafeAreaView>
        </View>
          <Button block rounded onPress = {()=> alert('add image')}>
            <Text style={styles.ButtonText} >+ Images</Text>
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
  },
  ButtonText: {
    color:'#ffffff'
  }
})