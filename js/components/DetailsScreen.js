import React from 'react';
import  { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Deets',
  };
  
  constructor() {
    super();

    this.state = {
      selectedPuppy: '',
      dogs: [
        {name: 'Beagle', image: "beagle.png"}, 
        {name: "Corgi", image: "corgi.png"}
      ]
    };
    this.onPress = this.onPress.bind(this);
  }
  onPress = () => {
    this.setState({
      selectedPuppy: event.nativeEvent.text
    });
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
          <Text>Beagle:</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={require('../images/beagle.png')} style={styles.image} onPress={() => this.props.navigation.navigate('Preview', {selectedPuppy: this.state.selectedPuppy})} />
          </TouchableOpacity>
          <Text>Corgi:</Text>
          <Image source={require('../images/corgi.png')} style={styles.image}/>
          <Text>Dog with collar</Text>
          <Image source={require('../images/dogwithcollar.png')} style={styles.image}/>
          <Text>Flying Pup:</Text>
          <Image source={require('../images/flyinpup.png')} style={styles.image}/>
          <Text>German Shepard</Text>
          <Image source={require('../images/germanshepard.png')} style={styles.image}/>
          <Text>Pupper:</Text>
          <Image source={require('../images/normpup.png')} style={styles.image}/>
          <Text>Water Pup!:</Text>
          <Image source={require('../images/otter.png')} style={styles.image}/>
          <Text>Poodle</Text>
          <Image source={require('../images/poodle.png')} style={styles.image}/>
          <Text>Pug with cone:</Text>
          <Image source={require('../images/pugwithcone.png')} style={styles.image}/>
          <Text>Doggy</Text>
          <Image source={require('../images/regdog.png')} style={styles.image}/>
          <Text>Sitting pup</Text>
          <Image source={require('../images/sittingdog.png')} style={styles.image}/>
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
  


