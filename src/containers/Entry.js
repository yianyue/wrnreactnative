'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import { connect } from 'react-redux';
import moment from 'moment';

import { getEntryDetail, updateContent } from '../redux/actions/entryDetail';

import { Button, View } from 'react-native';
import EntryView from '../components/Entry';

class Entry extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    const options = {
      title: moment(params.created_at).format('dddd, MMMM Do YYYY')
    };
    if (params.save) {
      options.headerRight = <View style={{marginRight: 10}}><Button title={'Save'} onPress={params.save} /></View>;
    }
    return options;
  };

  componentDidMount () {
    const id = this.props.navigation.state.params.id;
    this.props.getEntryDetail(id);
  }

  componentWillReceiveProps (nextProps) {
    const id = this.props.navigation.state.params.id;
    const entry = this.props.entryDetail[id];
    const newEntry = nextProps.entryDetail[id];
    if (!entry) {
      console.log('entry undefined?!', id);
    } else {
      if (!entry.error && newEntry.error) {
        if (!this.props.navigation.state.params.save) {
          this.props.navigation.setParams({
            save: () => this._update(newEntry.content)
          });
        }
      } else if (!newEntry.error) {
        if (this.props.navigation.state.params.save) {
          this.props.navigation.setParams({
            save: null
          });
        }
      }
    }
  }

  _update = (content) => {
    const id = this.props.navigation.state.params.id;
    this.props.updateContent(id, content);
  }

  render () {
    const id = this.props.navigation.state.params.id;
    const entry = this.props.entryDetail[id];
    // console.log(this.constructor.name, entry);
    return (
      <EntryView
        id={id}
        entry={entry}
        update={this._update}
      />
    );
  }
}

export default connect(
  (state) => ({
    user: state.session.user,
    entryDetail: state.entryDetail
  }),
  {
    getEntryDetail,
    updateContent
  }
)(Entry);
