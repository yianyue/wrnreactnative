'use strict';

import React from 'react-native';
const { PropTypes, View, Text, ListView, TouchableHighlight } = React;
import Entry from './Entry';

class EntryList extends React.Component {
  static propTypes = {

  };

  // componentWillMount(){
  //   console.log('EntryList mounting...')
  // }

  render () {
    // console.log('EntryList render...')
    return (
      <View>
        <Text>
          EntryList view!
        </Text>
        <TouchableHighlight
          onPress={() => { this.props.navigator.push({ name: 'Entry Detail', component: Entry})}}
          style={{height: 30, justifyContent: 'center'}}
          >
          <Text style={{color: 'skyblue'}}>Go to DetailView</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EntryList;
