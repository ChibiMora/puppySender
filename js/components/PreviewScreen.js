import React from 'react';
import ViroConfig from '../ViroConfig';
import {StyleSheet} from 'react-native';
import {ViroARSceneNavigator } from 'react-viro';

export default class PreviewScreen extends React.Component {
    constructor (){
        super();
    }
    
    render(){
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        return (
    <ViroARSceneNavigator apiKey={ViroConfig.apiKey} initialScene={{scene: require('./scenes/ViewDogScene'), passProps: {randomProp: "David"}}} />
        )
    }
}