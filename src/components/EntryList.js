'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View, Text, FlatList, TouchableHighlight, StyleSheet
} from 'react-native';

import moment from 'moment';

import { getErrorMessage } from '../helpers';

class EntryListView extends Component {
  static propTypes = {
    entries: PropTypes.array
  };

  _renderEntry = ({item: entry}) => {
    const createdAt = moment(entry.created_at);
    return (
      <View style={styles.row}>
        <View style={styles.left}>
          <Text>{createdAt.format('MMM')}</Text>
          <Text style={styles.date}>{createdAt.format('D')}</Text>
          <Text>{createdAt.format('ddd')}</Text>
        </View>
        <TouchableHighlight
          onPress={() => this.props.onItemPress(entry)}
          style={[styles.card, entry.locked && styles.locked]}
          underlayColor={'pink'}
        >
          <Text>{entry.preview}</Text>
        </TouchableHighlight>
      </View>
    );
  };

  _renderSeparator = ({highlighted}) => <View style={styles.separator} />

  _keyExtractor = (item) => item.id;

  render () {
    // console.log('EntryListView render...')
    const { loading, list, error } = this.props.entry;
    const errorMessage = getErrorMessage(error);
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

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: 'transparent'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  left: {
    alignItems: 'center',
    flex: 0.1,
    paddingHorizontal: 15
  },
  date: {
    fontSize: 26
  },
  card: {
    flex: 0.9,
    height: 100,
    padding: 10,
    backgroundColor: 'white',
    marginRight: 15,
  },
  locked: {
    backgroundColor: 'gray'
  }
});

export default EntryListView;
