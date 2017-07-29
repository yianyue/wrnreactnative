'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Text,
} from 'react-native';

export default class CText extends Component {
  render () {
    let {children, ...otherProps} = this.props;
    return (
      <Text {...otherProps}>
        {children}
      </Text>
    );
  }
}
