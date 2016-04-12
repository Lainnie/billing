import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import Workday from '../containers/workday';
import NewWorkday from '../containers/newWorkday';
import { Workdays } from '../../collections';
import Store from '../store';

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

const composer = (props, onDate) => {
  if (Meteor.subscribe('workdays.list').ready()) {
    const workdays = Workdays.find().fetch();
    onDate(null, {workdays});
  };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default composeWithTracker(composer)(HomeContainer);
