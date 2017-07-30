'use strict';

import {
  StackNavigator,
} from 'react-navigation';

import EntryList from './EntryList';
import Entry from './Entry';
import Profile from './Profile';

import Login from './Login';

const Authenticated = StackNavigator({
  EntryList: { screen: EntryList },
  Entry: { screen: Entry },
  Profile: { screen: Profile }
});

const Unauthenticated = StackNavigator({
  Login: { screen: Login }
});

export {Authenticated, Unauthenticated};
