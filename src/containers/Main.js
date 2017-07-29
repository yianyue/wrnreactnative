'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Platform,
  BackAndroid,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import EntryList from './EntryList';
import Entry from './Entry';
import Profile from './Profile';

const Main = StackNavigator({
  Home: { screen: EntryList },
  Entry: { screen: Entry },
  Profile: { screen: Profile }
});

export default Main;
