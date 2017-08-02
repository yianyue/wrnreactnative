'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text
} from 'react-native';

import moment from 'moment';

import EntryInput from './EntryInput';

const isToday = (time) => {
  return moment().isSame(moment(time), 'day');
};

export default class Entry extends Component {
  static propTypes = {
    entry: PropTypes.object,
    update: PropTypes.func.isRequired
  };

  _handleUpdate = (text) => {
    this.props.update(text);
  }

  render () {
    const { entry = {} } = this.props;
    const value = entry.content ? entry.content : '';
    const editable = entry.updated_at ? isToday(entry.updated_at) : false;
    return (
      <View style={{flex: 1}}>
        <EntryInput value={value} onChangeText={this._handleUpdate} editable={editable} />
      </View>
    );
  }
}
