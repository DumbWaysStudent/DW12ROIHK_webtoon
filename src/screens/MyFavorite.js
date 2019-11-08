import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Body, Item, Button, Input, Icon, List, Thumbnail, ListItem, Card, Header } from 'native-base'

export default class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //test : this.props.navigation.favorite,
      banners: [{
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
      arrayholder: [],
      data: [],
    };
  }

  handleDetail() {
    this.props.navigation.navigate('Detail')
  }

  componentDidMount() {
    //const { favorite } = this.props.navigation.state.params;
    //this.setState({banners: favorite})
    this.setState({ arrayholder: this.state.banners })
  }

  searchFilterFunction = text => {
    const newData = this.state.arrayholder.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;

    });

    this.setState({ banners: newData });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar style={styles.Header}>
            <View style={styles.formSearch}>
              <Item regular>
                <Input
                  placeholder="Type Here..."
                  lightTheme
                  onChangeText={text => this.searchFilterFunction(text)}
                />
                <Icon name='search'
                  onPress={() => alert('search')} />
              </Item>
            </View>
          </Header>
        <Content>
          <View style={styles.formFav}>
            <Text style={styles.title}>Favorite</Text>
            <List dataArray={this.state.banners}
              renderRow={(item) =>
                <Card style={styles.Card}>
                  <ListItem thumbnail>
                    <Button onPress={() => this.handleDetail()}>
                      <Thumbnail square source={{ uri: item.url }} />
                    </Button>
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note numberOfLines={1}>{item.sumFav} Favorite</Text>
                    </Body>
                  </ListItem>
                </Card>
              }>
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
    backgroundColor: '#f4f4f4'
  },
  Header: {
    backgroundColor: '#E3608A',
  },
  formSearch: {
    marginVertical: 10,
    width: Dimensions.get('window').width-20
  },
  formFav: {
    padding: 5
  },
  title: {
    padding: 5,
    fontSize: 20,
  },
  Card: {
    borderWidth: 5,
    borderColor: 'black'
  }
})