'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';

import EntryInput from './EntryInput';

export default class Entry extends Component {
  static propTypes = {
    entry: PropTypes.object,
  };

  render () {
    const value = this.props.entry && this.props.entry.data ? this.props.entry.data.content : '';
    return (
      <View style={{flex: 1}}>
        <EntryInput value={value} />
      </View>
    );
  }
}
