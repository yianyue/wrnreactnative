'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import {MAIN_COLOR} from '../../styleConstants';

export default class CText extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    const {title, theme = 'default', ...otherProps} = this.props;
    return (
      <TouchableHighlight style={buttonStyles[theme]} {...otherProps}>
        <Text style={textStyles[theme]}>{title}</Text>
      </TouchableHighlight>
    );
  }
}

const buttonStyles = StyleSheet.create({
  default: {
    height: 40,
    borderRadius: 40,
    backgroundColor: MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  }
});

const textStyles = StyleSheet.create({
  default: {
    color: '#fff'
  }
});
