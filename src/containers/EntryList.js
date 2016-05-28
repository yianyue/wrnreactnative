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

class EntryList extends Component {
  render() {
    return (
      <View>
        <Text>EntryList</Text>
        <TouchableOpacity onPress={() => this.props.onNavigate({type: 'push', key: 'Entry', data: {id: 111}})}>
          <Text>Go to Entry</Text>
        </TouchableOpacity>
        <Text>data: {JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }
}

export default EntryList;
