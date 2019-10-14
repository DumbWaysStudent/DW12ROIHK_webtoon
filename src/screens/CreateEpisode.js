import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import {
  Container, Content, Body, Item, Button, Input, Icon, Thumbnail, ListItem, Header,
  Left, Title, Right
} from 'native-base';
import ImagePicker from 'react-native-image-picker';


export default class CreateEpisode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EpisodeName: this.props.navigation.state.params.episode,
      data: [{
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
      }],

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

  handleRemoveBtn(idx) {
    let newData = this.state.data.filter((item) =>
      item.id !== idx
    );
    for (let i = 0; i < newData.length; i++) {
      newData[i].id = i + 1;
    }
    this.setState({ data: newData })
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
        const addData = { id: this.state.data.length + 1, fileName, url: addImg };
        const newData = this.state.data.slice();
        newData.push(addData);
        this.setState({ data: newData })

      }
    });
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
                renderItem={({ item }) =>
                  <ListItem thumbnail>
                    <Button transparent >
                      <Thumbnail square source={{ uri: item.url }} /></Button>
                    <Body>
                      <Text>{item.id}. {item.fileName}</Text>
                      <Button small block danger
                        style={{ width: 80 }}
                        onPress={() => this.handleRemoveBtn(item.id)}>
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