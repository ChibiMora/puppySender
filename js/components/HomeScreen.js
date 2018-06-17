
import React, { Component } from 'react';
import { Button, Text, View, TextInput, StyleSheet} from 'react-native';


export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };
  
  constructor() {
    super();

    this.state = {
      name: ''
    };

    this._onNameTextChanged = this._onNameTextChanged.bind(this);
  }
  _onNameTextChanged = (event) => {
    this.setState({name: event.nativeEvent.text});
  }

  render() {
    console.log('HomeScreen.render');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Text>Let's get ready to send your friends puppies!!!</Text>
        <Text> Enter your name below, so your friends know who sent them a pupper! </Text>
          <View style={styles.flowRight}>
             <TextInput style={styles.searchInput} placeholder='Name' onChangeText={(name) => this.setState({name})} />
          </View>
          <Button title="Submit Name" value={this.state.name} onChange={this._onNameTextChanged} onPress={() => this.props.navigation.navigate('Detail', {name: this.state.name})}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
});
