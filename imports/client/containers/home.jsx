import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import { Workdays } from '../../collections';

import { Home } from '../components';

class HomeContainer extends React.Component {
  render() {
    return <Home {...this.props} />
  }
};

const mapStateToProps = (state) => {
  return {
    newWorkday: state.newWorkday
  };
};

const composer = (props, onData) => {
  if (Meteor.subscribe('workdays.list').ready()) {
    const workdays = Workdays.find({}, {sort: { workdate: -1}});
    onData(null, { workdays });
  };
};

const connected = connect(mapStateToProps)(HomeContainer);

export default composeWithTracker(composer)(connected);
