'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';

import { getEntries } from '../redux/actions/entry';
import { logout } from '../redux/actions/session';

import { Button, View } from 'react-native';
import EntryListView from '../components/EntryList';

class EntryList extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    if (params.logout) {
      return {
        headerRight: <View style={{marginRight: 10}}><Button title={'Logout'} onPress={params.logout} color={'#000'} /></View>,
      };
    } else {
      return {};
    }
  };

  componentDidMount () {
    this.props.getEntries(false);
    this.props.navigation.setParams({
      logout: this.props.logout
    });
  }

  _goToDetail = (entry) => {
    if (entry.locked) {
      alert('Entry Locked! Complete your writing goal to unlock');
    } else {
      this.props.navigation.navigate('Entry', entry);
    }
  }

  render () {
    return (
      <EntryListView
        entry={this.props.entry}
        onRefresh={this.props.getEntries}
        onItemPress={this._goToDetail}
      />
    );
  }
}

export default connect(
  (state) => ({
    user: state.session.user,
    entry: state.entry
  }),
  {
    getEntries,
    logout
  }
)(EntryList);
