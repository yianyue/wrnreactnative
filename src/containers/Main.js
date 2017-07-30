'use strict';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './Home';
import EntryList from './EntryList';
import Entry from './Entry';
import Profile from './Profile';

const Main = StackNavigator({
  Home: { screen: Home },
  EntryList: { screen: EntryList },
  Entry: { screen: Entry },
  Profile: { screen: Profile }
});

export default Main;
