import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  Container, Content, Body, Item, Button, Input, Icon, List,
  Card, CardItem, Thumbnail, ListItem, Left, Header
} from 'native-base'
import Slideshow from 'react-native-image-slider-show';

import { connect } from 'react-redux'
import * as actionWebtoons from './../redux/actions/actionWebtoons'


class ForYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      slidePos: 1,
      slideInterval: null,
      banners: [{
        title: 'Webtoon 1',
        genre: 'Barton waited twenty always repair in within we do.',
        image: 'https://via.placeholder.com/1080',
        favorite_count: 42,
        isFavorite: 1,
        create_by: 1
      },
      {
        title: 'Webtoon 2',
        genre: 'Barton waited twenty always repair in within we do.',
        image: 'https://via.placeholder.com/1020',
        favorite_count: 44,
        isFavorite: 0,
        create_by: 2
      }],
      favorite: [],
      imageBanners: []
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
    this.props.handleGetWebtoons()

    if (this.props.webtoonsLocal.webtoons.isSuccess) {
      this.setState({ banners: this.props.webtoonsLocal.webtoons.data })
    }

    // let image = []
    // for(let i=0; i < 2; i++){
    //   image[i]= this.state.banners[i].image
    // }
    // this.setState({imageBanners: image})

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
  handleDetail(item) {
    this.props.navigation.navigate('Detail', {webtoon: item})
  }

  onHandleFavoriteBtn(idx) {
    let newData = this.state.banners;
    newData[idx].isFav = !newData[idx].isFav;
    if (newData[idx].favBtnColor == '#ff9c9c') {
      newData[idx].favBtnColor = '#ff3333'
    } else if (newData[idx].favBtnColor == '#ff3333') {
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
                        <Button transparent onPress={() => alert('belum')}>
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

                dataArray={this.props.webtoonsLocal.webtoons.data} horizontal={false}
                renderRow={(item) =>

                  <CardItem thumbnail>
                    <Left>
                      <Button transparent onPress={() => this.handleDetail(item)}>
                        <Thumbnail square source={{ uri: item.image }} />
                      </Button>
                      <Body>
                        <Text >{item.title}</Text>
                        <Button block small
                          style={{ backgroundColor: item.favBtnColor }}
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
  Header: {
    backgroundColor: '#ff6e6e',
  },
  headerSlide: {
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
  favBtn: {
  },
  ListDiv: {
    backgroundColor: '#ff6e6e',
  }
})


const mapStateToProps = state => {
  return {
    webtoonsLocal: state.webtoons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetWebtoons: () => dispatch(actionWebtoons.handleGetWebtoons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForYou);
