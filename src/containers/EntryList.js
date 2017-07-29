'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { connect } from 'react-redux';

import { getEntries } from '../redux/actions';

class EntryList extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render () {
    const { navigate } = this.props.navigation;
    // console.log(this.props.user, this.props.entry);
    return (
      <View>
        <Text>EntryList</Text>
        <TouchableOpacity
          onPress={() => navigate('Entry', { id: 'Lucy' })}
        >
          <Text>Go to Entry</Text>
        </TouchableOpacity>
        <Text>data: {JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
    entry: state.entry
  }),
  (dispatch) => ({
    loadEntries: () => dispatch(getEntries())
  })
)(EntryList);
