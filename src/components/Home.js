'use strict';

import React from 'react-native';
import { connect } from 'react-redux'
import { getEntries } from '../redux/actions/index';

const { PropTypes, View, Text, Navigator, TouchableHighlight, BackAndroid, Platform } = React;

import EntryList from './EntryList';
import Profile from './Profile';
import Summary from './Summary';

class Home extends React.Component {
  static propTypes = {

  };

  constructor(props){
    super(props);
    console.log('Home constructor entries', props.entries)
    if ( Platform.OS === 'android'){
      BackAndroid.addEventListener('hardwareBackPress', () => {
        try {
          this.refs.navigator.pop();
          return true;
        }
        catch (err) {
          return false;
        }
      });
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('Home.componentWillReceiveProps entries', nextProps.entries)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch( getEntries() );
  }

  border(color){
    return {
      borderWidth: 2,
      borderColor: color
    };
  }

  _handleRenderScene( route, navigator ) {
    // console.log('renderScene', navigator.getCurrentRoutes())
    if (route.component){
      return React.createElement(route.component, { navigator, ...route.props });
    } else {
      // console.log('return to home view')
      return (
        <View>
          <Text>
            Home view!
          </Text>
        </View>
      );
    }
  }

  render () {
    return (
      <View style={[this.border('black'), {flex: 1}]}>
        <View style={{flex: 1}}>
          <Navigator
            style={{flex: 1}}
            ref='navigator'
            navigationBar={<TabBar {...this.props }/>}
            initialRoute={{name: 'My First Scene'}}
            renderScene={ this._handleRenderScene }
            />
        </View>
      </View>
    );
  }
}

class TabBar extends React.Component {

  constructor(props){
    super(props);
    // console.log('TabBar', props.navigator)
  }

  border(color){
    return {
      borderWidth: 2,
      borderColor: color
    };
  }

  render(){
    let { entries } = this.props;
    return (
      <View style={{flexDirection: 'row', height: 50, alignItems: 'stretch', justifyContent: 'space-around'}}>
        <TouchableHighlight
          onPress={() => { this.props.navigator.replace({ name: 'Entry List', component: EntryList, props: { entries }});} }
          style={this.border('blue')}
          >
          <Text>Go to EntryList</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => { this.props.navigator.replace({ name: 'Profile', component: Profile})}}
          style={this.border('blue')}
          >
          <Text>Go to Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => { this.props.navigator.replace({ name: 'Summary', component: Summary})}}
          style={this.border('blue')}
          >
          <Text>Go to Summary</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function selectFnForApp(state){
  let { entry, user } = state;
  return {
    user,
    entries: entry.list
  };
}

export default connect(selectFnForApp)(Home);
