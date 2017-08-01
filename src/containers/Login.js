'use strict';

import React, { PropTypes } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { login } from '../redux/actions/session';

class Login extends React.Component {
  static propTypes = {

  };

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  _updateInput = (fieldName) => (input) => this.setState({[fieldName]: input});

  _submit = () => this.props.login(this.state);

  render () {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          // underlineColorAndroid
          onChangeText={this._updateInput('email')}
          onSubmitEditing={() => this._passwordField && this._passwordField.focus()}
        />
        <TextInput
          ref={(node) => { this._passwordField = node; }}
          style={styles.input}
          placeholder={'Password'}
          returnKeyType={'done'}
          secureTextEntry
          onChangeText={this._updateInput('password')}
          onSubmitEditing={this._submit}
        />
        <Button onPress={this._submit} disabled={!this.state.email || !this.state.password} title={'Login'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    // borderWidth: 1
  }
});

export default connect(
  (state) => ({
    session: state.session
  }),
  {login}
)(Login);
