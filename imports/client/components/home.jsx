import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import Workday from './workday';
import NewWorkday from './newWorkday';
import getWorkdays from '../actions/getWorkdays';
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
          <h1>Facturation made easy</h1>
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
    workdays: state.workdays,
    newWorkday: state.newWorkday
  };
};

Meteor.subscribe('workdays.list', () => {
  Store.dispatch(getWorkdays());
});

export default connect(mapStateToProps)(Home);
