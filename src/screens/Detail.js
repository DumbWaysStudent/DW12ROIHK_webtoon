import { StyleSheet, Dimensions, Text, Share, Image, FlatList, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, ListItem, Thumbnail } from 'native-base';


export default class Detail extends Component {


    constructor(props) {
        super(props);
        this.state = {
          cover:{
            title: 'The Secret of Angel',
            image: 'https://webtoons-static.pstatic.net/image/pc/home/og_id.jpg?dt=2019090201'
          },
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
  }
}
  onClick() {
    Share.share({
      message: 'BAM: we\'re helping your business with awesome React Native apps',
      url: 'http://bam.tech',
      title: 'Wow, did you see that?'
    }, {
      // Android only:
      dialogTitle: 'Share BAM goodness',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }
  
  handleDetailEp() {
    this.props.navigation.navigate('DetailEpisode')
  }
  
  handleBack() {
    this.props.navigation.navigate('BottomTabNav')
  }
  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Left>
            <Button  transparent>
              <Icon name='arrow-back'
               onPress={()=> this.handleBack()} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{this.state.cover.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share-alt'
              onPress={()=>this.onClick()}/>
            </Button>
          </Right>
        </Header>
        <Content style={styles.container}>      
        <Image
          style={{width: 400, height: 150}}
          source={{uri: this.state.cover.image}}/>
      <SafeAreaView style={styles.form}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => 
          <ListItem thumbnail>
            <Button transparent onPress = {()=> this.handleDetailEp()}>
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
        </Content>
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
  formAll: {
    marginTop: 10,
    width: 250,
    
  },  
  title: {
    fontSize: 20,
    width: 200
  },
  Slideshow:{
    width: 250,
  }
})