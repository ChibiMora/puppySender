/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import HomeScreen from './js/components/HomeScreen';
import DetailsScreen from './js/components/DetailsScreen';
import PreviewScreen from './js/components/PreviewScreen';
import { createStackNavigator } from 'react-navigation';

export default class AppRoot extends Component  {
  render() {
    return <RootStack />;
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailsScreen,
    Preview: PreviewScreen
  },
  {
    initialRouteName: 'Home',
  }
);

