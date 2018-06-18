import React from 'react';
import  { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  
  constructor() {
    super();

    this.state = {
      dogs: [
        {id: 2, name: 'Corgi', image: require('../images/corgi.png'), objFile: require('../res/corgi/model.obj'), objResources: [require('../res/corgi/materials.mtl')], scale: [1, 1, 1]},
        {id: 4, name: 'Flying pup', image: require('../images/flyinpup.png'), objFile: require('../res/flyingPup/model.obj'), objResources: [require('../res/flyingPup/materials.mtl')], scale: [1, 1, 1]},
        {id: 5, name: 'German Shepard', image: require('../images/germanshepard.png'), objFile: require('../res/germanshepard/model.obj'), objResources: [require('../res/germanshepard/materials.mtl'), require('../res/germanshepard/texture.jpg')], scale: [0.025, 0.025, 0.025]},
        {id: 9, name: 'Pug', image: require('../images/pug.png'), objFile: require('../res/pug/model.obj'), objResources: [require('../res/pug/materials.mtl')], scale: [1, 1, 1]},
        {id: 10, name: 'Pylon Pug', image: require('../images/pugwithcone.png'), objFile: require('../res/pylonPug/model.obj'), objResources: []},
        {id: 11, name: 'Doggie', image: require('../images/regdog.png'), objFile: require('../res/regpup/dog.obj'), scale: [0.00129, 0.00129, 0.00129]},
        {id: 7, name: 'Water Dog', image: require('../images/otter.png'), objFile: require('../res/RiverOtter/RiverOtter.obj'), objResources: [require('../res/RiverOtter/RiverOtter_BaseColor.png'), require('../res/RiverOtter/RiverOtter.mtl')], scale: [0.09, 0.09, 0.09]},
        {id: 1, name: 'Beagle', image: require('../images/beagle.png'), objFile: require('../res/beagle/Mesh_Beagle.obj'),  scale: [0.0129, 0.0129, 0.0129]},
        {id: 3, name: 'Pupper with collar', image: require('../images/dogwithcollar.png'), objFile: require('../res/dogwithcollar/dogwithcollar.obj'),  objResources: [require('../res/dogwithcollar/material.mtl'), require('../res/dogwithcollar/Dog_w_CollarSG5.png')], scale: [0.25, 0.25, 0.25]},
        {id: 6, name: 'Pupper', image: require('../images/normpup.png'), objFile: require('../res/normdog/Booboo.obj'), objResources: [require('../res/normdog/Booboo.mtl'), require('../res/normdog/booeye.jpg'), require('../res/normdog/boojColor.png')], scale: [1, 1, 1]},
        // {id: 8, name: 'Poodle', image: require('../images/poodle.png'), objFile: require('../res/Poodle/Poodle_01.obj'), objResources: [require('../res/Poodle/Poodle_01.mtl')], scale: [1, 1, 1]}
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
  }
});