import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import { Billings } from '../components';

import { Workdays } from '../../collections';

class BillingsContainer extends React.Component {
  render() {
    return <Billings {...this.props} />
  }
}

const composer = (props, onData) => {
  if (Meteor.subscribe('workdays.list').ready()) {
    const workdays = Workdays.find({}, { sort: { workdate: -1 }});

    onData(null, { workdays });
  }
};

const composed = composeWithTracker(composer)(BillingsContainer);

export default connect()(composed);
