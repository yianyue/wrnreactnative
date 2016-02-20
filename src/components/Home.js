'use strict';

import React from 'react-native';
const { PropTypes, View, Text, Navigator, TouchableHighlight, BackAndroid, Platform } = React;

import EntryList from './EntryList';
import Profile from './Profile';
import Summary from './Summary';

class Home extends React.Component {
  static propTypes = {

  };

  constructor(props){
    super(props);

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

  border(color){
    return {
      borderWidth: 2,
      borderColor: color
    };
  }

  handleRenderScene( route, navigator ){
    console.log('renderScene', navigator.getCurrentRoutes())
    if (route.component){
      return React.createElement(route.component, { navigator });
    } else {
      console.log('return home view')
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
            navigationBar={<TabBar/>}
            initialRoute={{name: 'My First Scene'}}
            renderScene={ this.handleRenderScene }
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
    return (
      <View style={{flexDirection: 'row', height: 50, alignItems: 'stretch', justifyContent: 'space-around'}}>
        <TouchableHighlight
          onPress={() => { this.props.navigator.replace({ name: 'Entry List', component: EntryList})}}
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

export default Home;
