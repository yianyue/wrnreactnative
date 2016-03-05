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
    // console.log('EntryList entries', props.entries );
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(entries),
    };
  }

  componentWillMount(){
    //   console.log('EntryList mounting...')
  }

  componentWillReceiveProps(nextProps){
    // console.log('EntryList receives next props', nextProps.entries)
    this.setState({
      entries: this.state.dataSource.cloneWithRows(nextProps.entries)
    });
  }

  _renderEntry = (entry) => {
    return (
        <TouchableHighlight
          onPress={() => {
            this.props.navigator.push({
              name: 'Entry Detail',
              component: Entry,
              props: {...entry}
            });
          }}
          style={{ flexDirection: 'row', height: 100, paddingHorizontal: 10 }}
          >
          <View style={{ flex: 1 }}>
            <View>
              <Text>{entry.id}</Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1}}>
              <Text>{entry.preview}</Text>
            </View>
          </View>
        </TouchableHighlight>
    );
  };

  render () {
    // console.log('EntryList render...')
    return (
      <View style={{flex: 1}}>
        <Text>
          EntryList view!
        </Text>
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
