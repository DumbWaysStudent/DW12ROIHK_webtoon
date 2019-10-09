import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Body, Item, Button, Input, Icon, List, Thumbnail, ListItem, Left } from 'native-base'
import Slideshow from 'react-native-image-slider-show';

export default class ForYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      slidePos: 1,
      slideInterval : null,
      banners : [{
        id: 0,
        title: 'The Secret of Angel',
        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        id: 1,
        title: 'Pasutri Gaje',
        url: 'https://webtoons-static.pstatic.net/image/pc/home/og_id.jpg?dt=2019090201'
      }, {
        id: 2,
        title: 'Young Mom',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015644.jpg'
      }, {
        id: 3,
        title: 'Young Dad',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015718.jpg'
      }, {
        id: 4,
        title: 'Old Mom',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015741.jpg'
      }, {
        id: 5,
        title: 'Young Dad',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'
      }],
    };
  }


  componentWillMount(){
    this.setState({
      slideInterval: setInterval(() => {
        this.setState({
          slidePos: this.state.slidePos === this.state.banners.length ? 0 : this.state.slidePos +1
        });
      }, 2000)
    });
  }

  componentWillUnmount(){
    clearInterval(this.state.slideInterval);
  }

  
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.formSearch}>
          <Item rounded>
            <Input
              value={this.state.search}
              onChangeText={(text) => this.setState({ search: text })}
                />
            <Icon name='search'/>
          </Item>
          </View>
            
          <Slideshow height={200}
          dataSource={this.state.banners}
          position={this.state.slidePos}
          onPositionChanged={position => this.setState({position})}
          />

          <View style={styles.formFav}>
            <Text style={styles.title}>Favorite</Text>
              <List dataArray={this.state.favList} horizontal={true}
              renderRow={(item) =>
              <ListItem thumbnail>
                <Body>
                <Thumbnail square source={{uri: item.url}}/> 
                  <Text>{item.title}</Text>
                </Body>
              </ListItem>}>
              </List>
              </View>

              <View style={styles.formAll}>
              <Text style={styles.title}>All</Text>

              <List 
              dataArray={this.state.banners} horizontal={false}
              renderRow={(item) =>
              <ListItem thumbnail>
                <Left>
                <Thumbnail square source={{uri: item.url}}/> 
                <Body>
                <Text>{item.title}</Text>
                <Item>
                <Button block small primary
                 onPress={() => alert('add Favorite')}>
                  <Text style={{color:'#ffffff'}}> + Favorite </Text>
                  </Button>
                  </Item>
                  </Body>
                  </Left>
              </ListItem>}>           
              </List>
              </View>
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
  formSearch :{
    marginVertical: 10
  },
  formFav: {
    padding: 5
  },
  formAll: {
    marginTop: 10,
    width: 250,
    
  },  
  title: {
    padding: 5,
    fontSize: 20,
  },
  Slideshow:{
    width: 250,
  }
})