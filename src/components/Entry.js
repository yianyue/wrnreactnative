'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View, Text, TouchableHighlight
} from 'react-native';

import EntryInput from './EntryInput';

class Entry extends Component {
  static propTypes = {
    entry: PropTypes.object,
  };

  constructor(props){
    super(props);
    let {navigator, ...rest} = props;
  }

  render () {
    let {navigator, ...rest} = this.props;
    return (
      <View style={{flex: 1}}>
        <Text>
          Entry view!
        </Text>
        <TouchableHighlight
          onPress={() => { this.props.navigator.jumpBack(); }}
          style={{height: 30, justifyContent: 'center'}}
          >
          <Text style={{color: 'skyblue'}}>Back</Text>
        </TouchableHighlight>
        <View style={{flex: 1}}>
          <EntryInput {...rest} />
        </View>
      </View>
    );
  }
}

export default Entry;
