import React from 'react';
import {StyleSheet} from 'react-native';
import {ViroARSceneNavigator, ViroARScene, ViroText, ViroConstants, ViroBox, ViroMaterials, ViroAmbientLight, ViroSpotLight, Viro3DObject } from 'react-viro';

const sharedProps = {
    apiKey: "paste it in here for now"
};

export default class PreviewScreen extends React.Component {
    constructor (){
        super();
        this.state = {
            text: 'Initializing AR....'
        };
        this._onInitialized = this._onInitialized.bind(this);
    }
    
    render(){
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        return (
            
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                <ViroText text={this.state.text} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle}/>
            </ViroARScene> 
        )
    }
    _onInitialized(state) {
        if (state == ViroConstants.TRACKING_NORMAL){
            this.setState({
                text: "Hello World"
            });
        } else if (state == ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
   }
}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
      fontFamily: 'Arial',
      fontSize: 30,
      color: '#ffffff',
      textAlignVertical: 'center',
      textAlign: 'center',  
    },
  });

