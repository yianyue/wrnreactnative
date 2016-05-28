'use strict';

import React, { PropTypes } from 'react';
import ReactNative from 'react-native';
const { View, Text } = ReactNative;

class Profile extends React.Component {
  static propTypes = {

  };

  render () {
    return (
      <View>
        <Text>
          Profile view!
        </Text>
      </View>
    );
  }
}

export default Profile;
