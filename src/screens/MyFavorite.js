import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Body, Item, Button, Input, Icon, List, Thumbnail, ListItem } from 'native-base'

export default class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      banners : [{
        id: 0,
        title: 'The Secret of Angel',
        sumFav: 100,
        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        id: 1,
        title: 'Pasutri Gaje',
        sumFav: 1000,
        url: 'https://webtoons-static.pstatic.net/image/pc/home/og_id.jpg?dt=2019090201'
      }, {
        id: 2,
        title: 'Young Mom',
        sumFav: 104,
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015644.jpg'
      }, {
        id: 3,
        title: 'Young Dad',
        sumFav: 120,
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015718.jpg'
      }, {
        id: 4,
        title: 'Old Mom',
        sumFav: 400,
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015741.jpg'
      }, {
        id: 5,
        title: 'Young Dad',
        sumFav: 10,
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'
      }],
    };
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
            <Icon name='search'
            onPress= {() => alert('search')}/>
          </Item>
          </View>
          <View style={styles.formFav}>
            <Text style={styles.title}>Favorite</Text>
              <List dataArray={this.state.banners}
              renderRow={(item) =>
              <ListItem thumbnail>
                  <Button onPress = {() => alert(item.title)}>
                <Thumbnail square source={{uri: item.url}}/> 
                </Button>
                <Body>
                  <Text>{item.title}</Text>
              <Text note numberOfLines={1}>{item.sumFav} Favorite</Text>
                </Body>
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
  title: {
    padding: 5,
    fontSize: 20,
  }
})