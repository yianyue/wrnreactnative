'use strict';

import React, { Component } from 'react-native';

import { Provider } from 'react-redux';

import Home from './components/Home';

import configureStore from './configureStore';

let store;

export default class App extends Component {

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
        <Home loading={this.state.isLoading}  />
      </Provider>
    );
  }
}
