import React from 'react';
import  { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Deets',
  };
  
  constructor() {
    super();

    this.state = {
      dogs: [
        {id: 1, name: 'Beagle', image: require('../images/beagle.png'), arFile: 'sample'},
        {name: 'Corgi', image: require('../images/corgi.png'), arFile: 'fdls'}
      ]
    };
  }

  // _selectedPuppy = (event) => {
  //   this.setState({selectedPuppy: event.nativeEvent.})
  // }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    
    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{name}, Choose a puppy to send:</Text>
        {
          this.state.dogs.map((dog)=>{
            return (
              <View key={dog.id}>
                <Text>{dog.name}</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Preview', {dog: dog, name: name})}>
                  <Image source={dog.image} style={styles.image} />
                </TouchableOpacity>
              </View>
            );
          })
        }
        </View>
      </ScrollView>
    );
  }
}

  const styles = StyleSheet.create({
    image: {
      width: 217,
      height: 138,
    },

  });
  


