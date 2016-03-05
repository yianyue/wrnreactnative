'use strict';

import React from 'react-native';
const { PropTypes, View, Text, TouchableHighlight } = React;

class Entry extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf( PropTypes.object ),
  };

  render () {
    return (
      <View>
        <Text>
          Entry view!
        </Text>
        <TouchableHighlight
          onPress={() => { this.props.navigator.jumpBack(); }}
          style={{height: 30, justifyContent: 'center'}}
          >
          <Text style={{color: 'skyblue'}}>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Entry;
