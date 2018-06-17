import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { ViroARScene, ViroText, ViroConstants, ViroBox, ViroMaterials, ViroAmbientLight, ViroSpotLight, Viro3DObject } from 'react-viro';

export default class ViewDogScene extends Component {
    constructor(){
        super();
        this.state = {
            text: "Initializing AR..."
        };
        this._onInitialized = this._onInitialized.bind(this);
        //console.log('PROPS========', this.props);
    }

    _onInitialized(state){
        if(state == ViroConstants.TRACKING_NORMAL){
            this.setState({
                text: "Your name here!"
            });
        } else if (state == ViroConstants.TRACKING_NONE){
             // Handle loss of tracking
        }
    }

    render() {
    // console.log("PROPS", this.props)
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized}>
            <ViroText text={this.props.randomProp} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} />
            {/* <Viro3DObject source={require('')} */}
            </ViroARScene>
        )
    }
}

module.exports = ViewDogScene;