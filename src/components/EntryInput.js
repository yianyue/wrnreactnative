'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View, ScrollView, Text, TextInput
} from 'react-native';


const DEFAULT_INPUT_BOX_HEIGHT = 80;

class EntryInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: props.preview || '',
      inputHeight: DEFAULT_INPUT_BOX_HEIGHT,
    };
  }

  _handleChange = (event) => {
    const text = event.nativeEvent.text;
    const inputHeight = Math.max(event.nativeEvent.contentSize.height, DEFAULT_INPUT_BOX_HEIGHT);
    this.setState({
      text,
      inputHeight
    });
  };

  render () {
    let { inputHeight, text } = this.state;
    return (
      <ScrollView style={{flex: 1}}>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, height: inputHeight }}
          multiline={true}
          autoCorrect={false}
          onChange={ this._handleChange }
          value={text}
          />
      </ScrollView>
    );
  }
}

export default EntryInput;
