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
    update: PropTypes.func.isRequired
  };

  _handleUpdate = (text) => {
    this.props.update(text);
  }

  render () {
    const value = this.props.entry && this.props.entry.content ? this.props.entry.content : '';
    return (
      <View style={{flex: 1}}>
        <EntryInput value={value} onChangeText={this._handleUpdate} />
      </View>
    );
  }
}
