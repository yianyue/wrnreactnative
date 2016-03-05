'use strict';

import React from 'react-native';
const { PropTypes, View, Text, ListView, TouchableHighlight } = React;
import Entry from './Entry';

class EntryList extends React.Component {
  static propTypes = {
    entries: PropTypes.array
  };

  constructor(props){
    super(props);
    let { entries } = props;
    console.log('EntryList entries', props.entries );
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(entries),
    };
  }

  componentWillMount(){
    //   console.log('EntryList mounting...')
  }

  componentWillReceiveProps(nextProps){
    console.log('EntryList receives next props', nextProps.entries)
  }

  _renderEntry(entry){
    return (
      <View style={{height: 100 }}>
        <View>
          <Text>{entry.id}</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text>{entry.preview}</Text>
        </View>
      </View>
    )
  }

  render () {
    // console.log('EntryList render...')
    return (
      <View style={{flex: 1}}>
        <Text>
          EntryList view!
        </Text>
        <TouchableHighlight
          onPress={() => { this.props.navigator.push({ name: 'Entry Detail', component: Entry})}}
          style={{height: 30, justifyContent: 'center'}}
          >
          <Text style={{color: 'skyblue'}}>Go to DetailView</Text>
        </TouchableHighlight>
        <ListView
          style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={this._renderEntry}
          />
      </View>
    );
  }
}

export default EntryList;
