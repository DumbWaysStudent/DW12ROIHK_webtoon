import { StyleSheet, Dimensions, Share, Image, FlatList, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

export default class DetailEpisode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cover: {
        ep: 'Episode 1',
        image: 'https://webtoons-static.pstatic.net/image/pc/home/og_id.jpg?dt=2019090201'
      },
      data: [{
        ch: 1,
        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        ch: 2,
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015644.jpg'
      }, {
        ch: 3,
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015718.jpg'
      }, {
        ch: 4,
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015741.jpg'
      }, {
        ch: 5,
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
  handleDetail() {
    this.props.navigation.navigate('Detail')
  }
  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back'
                onPress={() => this.handleDetail()} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{this.state.cover.ep}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share-alt'
                onPress={() => this.onClick()} />
            </Button>
          </Right>
        </Header>
        <Content style={styles.container}>
          <SafeAreaView style={styles.form}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) =>

                <Image
                  style={styles.imageForm}
                  source={{ uri: item.url }} />
              }
              keyExtractor={item => item.ch}
            />
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
  imageForm: {
    height: Dimensions.get('window').height
  },
  form: {
    padding: 5
  },
  title: {
    fontSize: 20,
    width: 200
  }
})