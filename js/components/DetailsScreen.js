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
        {id: 1, name: 'Beagle', image: require('../images/beagle.png'), arFile: require('../res/beagle/Mesh_Beagle.obj')},
        {id: 2, name: 'Corgi', image: require('../images/corgi.png'), arFile: require('../res/corgi/model.obj')},
        {id: 3, name: 'Pupper with collar', image: require('../images/dogwithcollar.png'), arFile: require('../res/dogwithcollar/dogwithcollar.obj')},
        {id: 4, name: 'Flying pup', image: require('../images/flyinpup.png'), arFile: require('../res/flyingPup/model.obj')},
        {id: 5, name: 'German Shepard', image: require('../images/germanshepard.png'), arFile: require('../res/germanshepard/model.obj')},
        {id: 6, name: 'Pupper', image: require('../images/normpup.png'), arFile: require('../res/norm dog/Booboo.obj')},
        {id: 7, name: 'Water Dog', image: require('../images/otter.png'), arFile: require('../res/RiverOtter/RiverOtter.obj')},
        {id: 8, name: 'Poodle', image: require('../images/poodle.png'), arFile: require('../res/Poodle/Poodle_01.obj')},
        {id: 9, name: 'Pug', image: require('../images/pug.png'), arFile: require('../res/pug/model.obj')},
        {id: 10, name: 'Pylon Pug', image: require('../images/pugwithcone.png'), arFile: require('../res/pylonPug/model.obj')},
        {id: 11, name: 'Doggie', image: require('../images/regdog.png'), arFile: require('../res/regpup/dog.obj')}
      ]
    };
  }


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
  


