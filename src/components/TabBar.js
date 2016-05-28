'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  NavigationExperimental,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

const {
  Reducer: NavigationReducer,
} = NavigationExperimental

const { JumpToAction } = NavigationReducer.TabsReducer;

class TabBar extends Component {
  render() {
    return (
      <View>
        {this.props.tabs.map(this._renderTab)}
      </View>
    );
  }

  _renderTab = (tab, index) => {
    // const textStyle = [styles.tabButtonText];
    // if (this.props.index === index) {
    //   textStyle.push(styles.selectedTabButtonText);
    // }
    return (
      <TouchableOpacity
        key={tab.key}
        onPress={() => {
          this.props.onNavigate(JumpToAction(index));
        }}>
        <Text>
          {'tab' + index}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TabBar;
