'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { logout } from '../redux/actions/session';

class Menu extends Component {
  static navigationOptions = {
    // title: 'Write Right Now!',
    // headerTintColor: 'pink'
  };

  render () {
    return (
      <View>
        <TouchableOpacity onPress={this.props.logout} >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    user: state.session.user,
  }),
  (dispatch) => ({
    logout: () => dispatch(logout())
  })
)(Menu);
