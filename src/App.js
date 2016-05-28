'use strict';

import React from 'react';

import ReactNative from 'react-native';

import { Provider } from 'react-redux';

import Main from './containers/Main';

import configureStore from './configureStore';

let store;

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount(){
    store = configureStore(() => {
      this.setState({isLoading: false});
    });
  }

  render() {

    return (
      <Provider store={store}>
        <Main  />
      </Provider>
    );
  }
}
