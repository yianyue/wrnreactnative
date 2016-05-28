'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Platform,
  BackAndroid,
  NavigationExperimental,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';

const {
  Reducer: NavigationReducer,
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

import EntryList from './EntryList';
import Entry from './Entry'
import Profile from './Profile'

function createReducer(initialState) {
  return (currentState = initialState, action) => {
    switch (action.type) {
      case 'push':
        return NavigationStateUtils.push(currentState, {key: action.key, data: action.data });

      case 'BackAction':
      case 'back':
      case 'pop':
        return currentState.index > 0 ? NavigationStateUtils.pop(currentState) : currentState;

      default:
        return currentState;
    }
  };
}


const mainReducer = createReducer(
  {
    key: 'BasicExampleStackKey',
    index: 0,
    children: [{key: 'Home'}]
  }
);


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      navState: mainReducer(undefined, {})
    };
  }

  _handleAction = (action) => {
    console.log('_handleAction', action)
    if (!action) {
      return false;
    }
    const newState = mainReducer(this.state.navState, action);
    if (newState === this.state.navState) {
      return false;
    }
    console.log('_handleAction, change state', newState)
    this.setState({navState: newState});
    return true;
  };

  _renderScene = (props) => {
    // There cannot be 2 children with the same key
    console.log('_renderScene', )
    let Scene;
    let { key, data } = props.scene.navigationState;
    switch (key) {
      case 'Entry':
        Scene = Entry;
        break;

      case 'Profile':
        Scene = Profile;
        break;

      case 'EntryList':
      default:
        Scene = EntryList;
    }
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'pink'}}>
        {/*<NavBar onNavigate={props.onNavigate} />*/}
        <Scene onNavigate={props.onNavigate} data={data} />
      </ScrollView>
    );
  }

  render(){
    return (
      <NavigationCardStack
        navigationState={this.state.navState}
        onNavigate={this._handleAction}
        renderScene={this._renderScene} />
    );
  }

}

export default Main;
