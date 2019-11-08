import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  Container, Content, Body, Item, Button, Input, Icon, List,
  Card, CardItem, Thumbnail, ListItem, Left, Header, Spinner
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
      data: [{
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


  UNSAFE_componentWillMount() {
    this.setState({
      slideInterval: setInterval(() => {
        this.setState({
          slidePos: this.state.slidePos === this.state.data.length ? 0 : this.state.slidePos + 1
        });
      }, 2000)
    });
    this.getData()
  }

  async getData() {
    await this.props.handleGetWebtoons()
    await this.setState({ data: this.props.webtoonsLocal.webtoons.data })

  }
  UNSAFE_componentDidMount() {
    // let image = []
    // for(let i=0; i < 2; i++){
    //   image[i]= this.state.data[i].image
    // }
    // this.setState({imageBanners: image})

    let newData = this.state.data;
    //newData[idx].isFav = !newData[idx].isFav;
    // function update favorite list
    newData = this.state.data.filter((item) =>
      item.isFav == true
    );
    this.setState({ favorite: newData });
    this.props.navigation.setParams({ favorite: this.state.favorite })

  }


  UNSAFE_componentWillUnmount() {
    clearInterval(this.state.slideInterval);
  }
  handleDetail(item) {
    this.props.navigation.navigate('Detail', { webtoon: item })
  }

  onHandleFavoriteBtn(idx) {
    let newData = this.state.data;
    newData[idx].isFav = !newData[idx].isFav;
    if (newData[idx].favBtnColor == '#ff9c9c') {
      newData[idx].favBtnColor = '#ff3333'
    } else if (newData[idx].favBtnColor == '#ff3333') {
      newData[idx].favBtnColor = '#ff9c9c'
    }
    // function update favorite list
    newData = this.state.data.filter((item) =>
      item.isFav == true
    );
    this.setState({ favorite: newData });
  }


  render() {
    if (this.props.webtoonsLocal.isLoading) {
      return (<Spinner />)
    }
    else if (this.props.webtoonsLocal.isSuccess) {
      // alert('here')
      if (this.props.webtoonsLocal.needRefresh) {
        this.getData()
      }

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
            <Card
              style={styles.headerSlide}>
              <Slideshow height={200}
                dataSource={this.state.data}
                position={this.state.slidePos}
                onPositionChanged={position => this.setState({ position })}
              />
            </Card>

            <List>
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

              <Card style={styles.formAll}>
                <ListItem itemDivider style={styles.ListDiv}>
                  <Text style={styles.title}>All</Text>
                </ListItem>
                <List 
                  dataArray={this.props.webtoonsLocal.webtoons.data} horizontal={false}
                  renderRow={(item) =>
                    <CardItem thumbnail style={{backgroundColor: 'transparent'}} >
                      <Left>
                        <Button transparent onPress={() => this.handleDetail(item)}>
                          <Thumbnail square source={{ uri: item.image }} />
                        </Button>
                        <Body>
                          <Text >{item.title}</Text>
                          <Button block small
                            style={{ backgroundColor: item.favBtnColor, width: 100 }}
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
    else { return (<Spinner />) }
  }
}



const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#f5f5f5'//'#F5E027'
    //height: 500
  },
  Header: {
    backgroundColor: '#E3608A',
  },
  headerSlide: {
    width: Dimensions.get('window').width-20,
    alignSelf: 'center',
    backgroundColor: '#E3608A',
    borderWidth: 10,
    borderColor: 'black'
  },
  formSearch: {
    marginVertical: 10
  },
  formFav: {
    alignSelf:'center',
    backgroundColor: '#f5f5f5',
    width: Dimensions.get('window').width-20,
    borderWidth: .2,
    borderColor: 'black'
  },
  formAll: {
    alignSelf:'center',
    width: Dimensions.get('window').width-20,
    backgroundColor: '#f4f4f4',
    borderWidth: .2,
    borderColor: 'black'
  },
  title: {
    height: 22,
    fontSize: 20,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  Slideshow: {
    width: Dimensions.get('window').width-40,

  },
  favBtn: {
  },
  ListDiv: {
    backgroundColor: '#E3608A',
    borderWidth: .2,
    borderColor: 'black'
    
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
