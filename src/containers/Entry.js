'use strict'

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

class Entry extends Component {
  render() {
    return (
      <View>
        <Text>Entry</Text>
        <TouchableOpacity onPress={() => this.props.onNavigate({type: 'back'})}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onNavigate({type: 'push', key: 'Profile', data: {profileID: 222}})}>
          <Text>go to Profile</Text>
        </TouchableOpacity>
        <Text>data: {JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }
}

export default Entry;
