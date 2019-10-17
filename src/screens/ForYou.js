import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  Container, Content, Body, Item, Button, Input, Icon, List,
  Card, CardItem, Thumbnail, ListItem, Left, Header
} from 'native-base'
import Slideshow from 'react-native-image-slider-show';

export default class ForYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      slidePos: 1,
      slideInterval: null,
      banners: [{
        id: 0,
        title: 'The Secret of Angel',
        isFav: false,
        favBtnColor: '#ff3333',
        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        id: 1,
        title: 'Pasutri Gaje',
        isFav: true,
        favBtnColor: '#ff9c9c',
        url: 'https://webtoons-static.pstatic.net/image/pc/home/og_id.jpg?dt=2019090201'
      }, {
        id: 2,
        title: 'Young Mom',
        isFav: false,
        favBtnColor: '#ff3333',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015644.jpg'
      }, {
        id: 3,
        title: 'Young Dad',
        isFav: true,
        favBtnColor: '#ff9c9c',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015718.jpg'
      }, {
        id: 4,
        title: 'Old Mom',
        isFav: true,
        favBtnColor: '#ff9c9c',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015741.jpg'
      }, {
        id: 5,
        title: 'Young Dad',
        isFav: true,
        favBtnColor: '#ff9c9c',
        url: 'https://s.kaskus.id/images/2017/02/27/2153697_20170227015800.jpg'
      }],
      favorite: [],
    };
  }


  componentWillMount() {
    this.setState({
      slideInterval: setInterval(() => {
        this.setState({
          slidePos: this.state.slidePos === this.state.banners.length ? 0 : this.state.slidePos + 1
        });
      }, 2000)
    });

  }
  componentDidMount() {

    let newData = this.state.banners;
    //newData[idx].isFav = !newData[idx].isFav;
    // function update favorite list
    newData = this.state.banners.filter((item) =>
      item.isFav == true
    );
    this.setState({ favorite: newData });
    this.props.navigation.setParams({ favorite: this.state.favorite })

  }

  componentWillUnmount() {
    clearInterval(this.state.slideInterval);
  }
  handleDetail() {
    this.props.navigation.navigate('Detail')
  }

  onHandleFavoriteBtn(idx) {
    let newData = this.state.banners;
    newData[idx].isFav = !newData[idx].isFav;
    if(newData[idx].favBtnColor == '#ff9c9c'){
      newData[idx].favBtnColor = '#ff3333'
    } else if(newData[idx].favBtnColor == '#ff3333'){
      newData[idx].favBtnColor = '#ff9c9c'  
    }
    // function update favorite list
    newData = this.state.banners.filter((item) =>
      item.isFav == true
    );
    this.setState({ favorite: newData });
  }


  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Header searchBar style={styles.Header}>
            <Item regular>
              <Input
                value={this.state.search}
                onChangeText={(text) => this.setState({ search: text })}
              />
              <Icon name='search' />
            </Item>

          </Header>
          <Header span 
          style={styles.headerSlide}>
            <Slideshow height={200}
              dataSource={this.state.banners}
              position={this.state.slidePos}
              onPositionChanged={position => this.setState({ position })}
            />
          </Header>

          <List>
            <View>
              <Card bordered style={styles.formFav}>

                <ListItem itemDivider style={styles.ListDiv}>
                  <Text style={styles.title}>Favorite</Text>
                </ListItem>


                <List dataArray={this.state.favorite} horizontal={true}
                  renderRow={(item) =>
                    <CardItem thumbnail bordered>
                      <Body>
                        <Button transparent onPress={() => this.handleDetail()}>
                          <Thumbnail square source={{ uri: item.url }} />
                        </Button>
                        <Text>{item.title}</Text>
                      </Body>
                    </CardItem>}>
                </List>
              </Card>

            </View>
            <Card>
              <ListItem itemDivider style={styles.ListDiv}>
                <Text style={styles.title}>All</Text>
              </ListItem>

              <List style={styles.formAll}

                dataArray={this.state.banners} horizontal={false}
                renderRow={(item) =>

                  <CardItem thumbnail>
                    <Left>
                      <Button transparent onPress={() => this.handleDetail()}>
                        <Thumbnail square source={{ uri: item.url }} />
                      </Button>
                      <Body>
                        <Text >{item.title}</Text>
                        <Button block small 
                        style={{backgroundColor: item.favBtnColor}}
                          onPress={() => this.onHandleFavoriteBtn(item.id)}>
                          <Text style={{ color: '#ffffff' }}> + Favorite </Text>
                        </Button>
                      </Body>
                    </Left>
                  </CardItem>
                }>
              </List>
            </Card>
          </List>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    //height: 500
  },
  Header:{
    backgroundColor: '#ff6e6e',
  },
  headerSlide:{
    height: 210, 
    width: Dimensions.get('window').width, 
    alignSelf: 'center',
    backgroundColor: '#ff6e6e',
  },
  formSearch: {
    marginVertical: 10
  },
  formFav: {
    padding: 3,
    backgroundColor: '#ff6e6e'
  },
  formAll: {
    marginTop: 10,
    width: 250,

  },
  title: {
    height: 22,
    fontSize: 20,
    color: 'white'
  },
  Slideshow: {
    width: 250,
  },
  favBtn:{
  },
  ListDiv:{
    backgroundColor: '#ff6e6e',
  }
})