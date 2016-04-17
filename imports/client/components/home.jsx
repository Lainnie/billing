import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import { NewWorkday, Workday } from '../containers';

import { Workdays } from '../../collections';

// Where to put helpers methods ?
const toDate = (timeStamp) => {
  return moment(timeStamp).format('D MMMM YYYY');
};

const Home = ({ workdays, newWorkday }) => (
  <div className="container">
    <div className="page-header">
      <div className="row">
        <div className="text-center col-xs-12">
          <h1>Billing made easy</h1>
        </div>
      </div>
    </div>

    <div className="row">
      <NewWorkday {...newWorkday} />
      {workdays.map(workday =>
        <Workday key={workday._id} {...workday} workdate={toDate(workday.workdate)} />
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    newWorkday: state.newWorkday
  };
};

const composer = (props, onData) => {
  if (Meteor.subscribe('workdays.list').ready()) {
    const workdays = Workdays.find().fetch();
    onData(null, { workdays });
  };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default composeWithTracker(composer)(HomeContainer);
