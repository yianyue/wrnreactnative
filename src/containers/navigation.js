'use strict';

import {
  StackNavigator
} from 'react-navigation';

import EntryList from './EntryList';
import Entry from './Entry';
import Profile from './Profile';

import Login from './Login';

import { MAIN_COLOR } from '../styleConstants';

const defaultNavigationOptions = {
  title: 'Write Now!',
  headerStyle: {
    backgroundColor: MAIN_COLOR
  },
  headerTintColor: '#fff'
};

const Authenticated = StackNavigator({
  EntryList: {
    screen: EntryList,
    navigationOptions: defaultNavigationOptions
  },
  Entry: {
    screen: Entry,
  },
  Profile: {
    screen: Profile,
    navigationOptions: defaultNavigationOptions
  }
});

const Unauthenticated = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: defaultNavigationOptions
  }
});

export {Authenticated, Unauthenticated};
