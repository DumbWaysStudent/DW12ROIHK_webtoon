import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList, AsyncStorage } from 'react-native';
import {
  Container, Content, Body, Item, Button, Input, Icon, Thumbnail, ListItem, Header,
  Left, Title, Right
} from 'native-base';
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux'
import * as actionMyImages from './../redux/actions/actionMyImages'


class CreateEpisode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: this.props.navigation.state.params.episode.result,
      webtoon: [],
      filePath: [],
      data: [],
      param:[]

    };
  }

  handleCreateWebtoon() {
    this.props.navigation.goBack(null, { addEpisode: this.state.addEpisode })
  }
  handleCreateEpisode() {
    this.props.navigation.navigate('CreateEpisode')
  }


  handleAddBtn() {
    const addImg = this.state.filePath.uri
    const inText = { id: this.state.data.length + 1, fileName: 'a', url: addImg };
    const newData = this.state.data.slice();
    newData.push(inText);
    this.setState({ data: newData })
  }

  async handleRemoveBtn(idx) {
    // let newData = this.state.data.filter((item) =>
    //   item.id !== idx
    // );
    // for (let i = 0; i < newData.length; i++) {
    //   newData[i].id = i + 1;
    // }
    // this.setState({ data: newData })
    const param = {
      ...this.state.param,
      image: idx
    }
    await this.props.handleDeleteMyImages(param)
    this.userData()
  }

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,

        });
        const addImg = this.state.filePath.uri
        const fileName = this.state.filePath.fileName
        const addData = { page: this.state.data.length + 1, fileName, image: addImg };
        const newData = this.state.data.slice();
        newData.push(addData);
        this.setState({ data: newData })
        
        this.addData(addData)
      }
    });
  }

  
  componentDidMount() {
    this.userData()
  }
  async addData(newData){
    const param = {
      ...this.state.param,
      data: newData
    }
    await this.props.handleAddMyImages(param)
  }

  async userData() {
    this.setState({webtoon: this.props.navigation.state.params.webtoon})
    //this.setState({episode: this.props.navigation.state.params.episode})
    const param = {
      token: await AsyncStorage.getItem('token'),
      user: await AsyncStorage.getItem('userId'),
      webtoon: await this.state.webtoon,
      episode: await this.state.episode.id
    }
    
    this.setState({param: param})
    console.log(this.props.navigation.state.params.episode);
    await this.props.handleGetMyImages(param)
    
    
  
    await this.setState({ data: this.props.myImages.images.data })
  }

  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.goBack(null)} >
              <Icon name='arrow-back'
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Create Episode</Title>
          </Body>
          <Right>
            <Button transparent
              onPress={() => this.handleCreateWebtoon()}>
              <Icon name='checkmark' />
            </Button>
          </Right>
        </Header>

        <Content style={styles.container}>
          <View style={styles.formTitle}>

            <Text style={styles.title}>Name</Text>
            <Item rounded>
              <Input
                value={this.state.episode.title}
                onChangeText={(text) => this.setState({ EpisodeName: text })}
              />
            </Item>
          </View>
          <View style={styles.formEp}>
            <Text style={styles.title}>Add Images</Text>
            <SafeAreaView style={styles.form}>
              <FlatList
                data={this.state.data}
                renderItem={({ item }) =>
                  <ListItem thumbnail>
                    <Button transparent >
                      <Thumbnail square source={{ uri: item.image }} /></Button>
                    <Body>
                      <Text>{item.page}. {item.fileName}</Text>
                      <Button small block danger
                        style={{ width: 80 }}
                        onPress={() => this.handleRemoveBtn(item.page)}>
                        <Text style={styles.ButtonText}> delete </Text></Button>
                    </Body>
                  </ListItem>
                }
                keyExtractor={item => item.id}
              />

            </SafeAreaView>
          </View>
          <Button block rounded onPress={this.chooseFile.bind(this)}>
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
  formTitle: {
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
    color: '#ffffff'
  },
  Header: {
    backgroundColor: '#ff6e6e',
  },

})



const mapStateToProps = state => {
  return {
    myImages: state.myImages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetMyImages: (param) => dispatch(actionMyImages.handleGetMyImages(param)),
    handleAddMyImages: (param) => dispatch(actionMyImages.handleAddMyImages(param)),
    handleDeleteMyImages: (param) => dispatch(actionMyImages.handleDeleteMyImages(param))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEpisode);
