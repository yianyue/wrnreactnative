'use strict'

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Profile</Text>
        <TouchableOpacity onPress={() => this.props.onNavigate({type: 'back'})}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>data: {JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }
}

export default Profile;
