'use strict';

import {
  StackNavigator
} from 'react-navigation';

import EntryList from './EntryList';
import Entry from './Entry';
import Profile from './Profile';

import Login from './Login';

const defaultNavigationOptions = {
  title: 'Write Right Now!'
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
