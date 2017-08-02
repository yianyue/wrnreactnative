'use strict';

import React, { PropTypes } from 'react';
import { View, TextInput, StyleSheet, StatusBar } from 'react-native';
import CButton from '../components/common/CButton';

import { connect } from 'react-redux';
import { login } from '../redux/actions/session';

import { MAIN_COLOR } from '../styleConstants';

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
    const {loggingIn} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={MAIN_COLOR}
          barStyle="light-content"
        />
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          underlineColorAndroid={'transparent'}
          tintColor={'red'}
          onChangeText={this._updateInput('email')}
          onSubmitEditing={() => this._passwordField && this._passwordField.focus()}
        />
        <TextInput
          ref={(node) => { this._passwordField = node; }}
          style={styles.input}
          placeholder={'Password'}
          returnKeyType={'done'}
          underlineColorAndroid={'transparent'}
          tintColor={MAIN_COLOR}
          secureTextEntry
          onChangeText={this._updateInput('password')}
          onSubmitEditing={this._submit}
        />
        <CButton onPress={this._submit} disabled={!this.state.email || !this.state.password || loggingIn} title={'LOGIN'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 25,
    marginBottom: 10
  }
});

export default connect(
  (state) => ({
    session: state.session
  }),
  {login}
)(Login);
