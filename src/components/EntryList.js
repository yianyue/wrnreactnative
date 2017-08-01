'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View, Text, FlatList, TouchableHighlight
} from 'react-native';

import moment from 'moment';

class EntryListView extends Component {
  static propTypes = {
    entries: PropTypes.array
  };

  _renderEntry = ({item: entry}) => {
    return (
      <TouchableHighlight
        onPress={() => this.props.onItemPress(entry)}
        style={{ flexDirection: 'row', height: 100, padding: 10, backgroundColor: entry.locked ? 'gray' : 'white' }}
      >
        <View style={{ flex: 1 }}>
          <View>
            <Text>{moment(entry.created_at).format('dddd, MMMM Do YYYY')}</Text>
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text>{entry.preview}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  _renderSeparator = ({highlighted}) => <View style={{height: 2, backgroundColor: 'transparent'}} />

  _keyExtractor = (item) => item.id;

  render () {
    // console.log('EntryListView render...')
    const { loading, list, error } = this.props.entry;
    const errorMessage = typeof error === 'string' ? error : 'something went wrong';
    if (!loading && error) {
      return (
        <View>
          <Text>Error: {errorMessage}</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={list}
        renderItem={this._renderEntry}
        ItemSeparatorComponent={this._renderSeparator}
        keyExtractor={this._keyExtractor}
        onRefresh={this.props.onRefresh}
        refreshing={loading}
        // onEndReached={this.props.onEndReached}
      />
    );
  }
}

export default EntryListView;
