'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  TextInput
} from 'react-native';

class EntryInput extends Component {
  render () {
    return (
      <TextInput
        style={{ flex: 1, textAlignVertical: 'top', backgroundColor: 'white', padding: 15 }}
        autoCorrect={false}
        autoFocus
        multiline
        onChangeText={ this.props.onChangeText }
        value={this.props.value}
        underlineColorAndroid={'transparent'}
      />
    );
  }
}

export default EntryInput;
