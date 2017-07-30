'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  View,
  Text
} from 'react-native';

import { Authenticated, Unauthenticated } from './navigation';

import { connect } from 'react-redux';

class Home extends Component {
  render () {
    const { isLoading, user } = this.props;
    console.log(this.constructor.name, isLoading, user);
    if (isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    if (user) {
      return <Authenticated />;
    } else {
      return <Unauthenticated />;
    }
  }
}

export default connect(
  (state) => ({
    user: state.session.user,
    entry: state.entry
  })
)(Home);
