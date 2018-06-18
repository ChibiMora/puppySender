import React, { Component } from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import { ViroARScene, ViroText, ViroConstants, ViroARPlaneSelector, ViroBox, ViroMaterials, ViroAmbientLight, ViroSpotLight, Viro3DObject } from 'react-viro';

export default class ViewDogScene extends Component {
    constructor(){
        super();
        this.state = {
            text: "Initializing AR..."
        };
        this._onInitialized = this._onInitialized.bind(this);
        
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
          const sentText = `${this.props.name} sent you a puppy!`;
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized}>
            

                <ViroAmbientLight color="#aaaaaa" />
                <ViroText text={sentText} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} transformBehaviors={['billboardY']}/>
                {/* <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -0.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} /> */}
                {/* <ViroARPlaneSelector> */}
                    <Viro3DObject
                    source={this.props.dog.objFile} resources={this.props.objResources} position={[0, -1, -1]} scale={this.props.dog.scale} type="OBJ" />
                {/* </ViroARPlaneSelector> */}
            </ViroARScene>
        )
    }
}

module.exports = ViewDogScene;