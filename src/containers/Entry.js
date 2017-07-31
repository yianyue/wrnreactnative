'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import { connect } from 'react-redux';

import { getEntryDetail } from '../redux/actions/entryDetail';

import EntryView from '../components/Entry';

class Entry extends Component {
  static navigationOptions = {
    // title: should be the date
  };

  componentDidMount () {
    const id = this.props.navigation.state.params.id;
    this.props.getEntryDetail(id);
  }

  render () {
    const id = this.props.navigation.state.params.id;
    const entry = this.props.entryDetail[id];
    console.log(this.constructor.name, entry);
    return (
      <EntryView
        id={id}
        entry={entry}
      />
    );
  }
}

export default connect(
  (state) => ({
    user: state.session.user,
    entryDetail: state.entryDetail
  }),
  (dispatch) => ({
    getEntryDetail: (id) => dispatch(getEntryDetail(id))
  })
)(Entry);
