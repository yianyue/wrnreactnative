'use strict';

import React from 'react';

import { Text } from 'react-native';

import { Provider } from 'react-redux';

import Home from './containers/Home';

import configureStore from './configureStore';

let store;

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: true,
      hasError: false
    };
  }

  componentWillMount () {
    store = configureStore(() => {
      this.setState({isLoading: false});
    });
  }

  componentDidCatch (error, info) {
  // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Text>Something went wrong.</Text>;
    }
    return (
      <Provider store={store}>
        <Home isLoading={this.state.isLoading} />
      </Provider>
    );
  }
}
