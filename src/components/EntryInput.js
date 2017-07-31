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
        style={{ flex: 1 }}
        multiline={true}
        autoCorrect={false}
        onChange={ this._handleChange }
        value={this.props.value}
        underlineColorAndroid={'transparent'}
      />
    );
  }
}

export default EntryInput;
