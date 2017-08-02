'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ScrollView,
  TextInput,
  Text
} from 'react-native';

class EntryInput extends Component {
  render () {
    const { editable, value } = this.props;
    if (editable) {
      return (
        <TextInput
          style={{ flex: 1, textAlignVertical: 'top', backgroundColor: 'white', padding: 15 }}
          autoCorrect={false}
          autoFocus
          multiline
          underlineColorAndroid={'transparent'}
          {...this.props}
        />
      );
    } else {
      return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{padding: 15}}>
          <Text>
            {value}
          </Text>
        </ScrollView>
      );
    }
  }
}

export default EntryInput;
