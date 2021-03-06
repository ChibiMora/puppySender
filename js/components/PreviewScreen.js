import React from 'react';
import ViroConfig from '../ViroConfig';
import {ViroARSceneNavigator } from 'react-viro';

export default class PreviewScreen extends React.Component {
    static navigationOptions = {
        title: 'Preview',
      };
      
    constructor (){
        super();

        this.state = {};
    }
    
    render(){
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        const dog = navigation.getParam('dog');
        return (
    <ViroARSceneNavigator apiKey={ViroConfig.apiKey} initialScene={{scene: require('./scenes/ViewDogScene'), passProps: {name: name, dog: dog}}} />
        );
    }
}