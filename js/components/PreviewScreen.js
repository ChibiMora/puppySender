import React from 'react';
import {StyleSheet} from 'react-native';
import {ViroARScene, ViroText, ViroConstants, ViroBox, ViroMaterials, ViroMaterials, ViroAmbientLight, ViroSpotLigt} from 'react-viro';

export default class PreviewScreen extends React.Component {
    constructor (){
        super();
        this.state = {
            text: 'Initializing AR....'
        }
        this._onInitialized = this._onInitialized.bind(this);
    }
    _onInitialized(state) {
        if(state == ViroConstants.TRACKING_NORMAL){
            this.setState({
                text: 
            })
        }
    }
    render(){
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                <ViroText text={}
            </ViroARScene>
        )
    }
}