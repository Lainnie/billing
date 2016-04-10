import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import { Workdays } from '../../collections';
import Workday from './workday';
import getWorkdays from '../actions/getWorkdays';
import Store from '../store';

const toDate = (iso) => {
  return moment(iso.getTime()).format('D MMMM YYYY');
};

const defaultWorday = {
  date: 'Select a date',
  workload: 1,
  company: 'Select a company'
};

const Home = ({ workdays }) => (
  <div className="container">
    <div className="page-header">
      <div className="row">
        <div className="text-center col-xs-12">
          <h1>Facturation made easy</h1>
        </div>
      </div>
    </div>

    <div className="row">
      <Workday {...defaultWorday} />
      {workdays.map(workday =>
        <Workday key={workday._id} date={toDate(workday.workdate)} {...workday} />
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    workdays: state.workdays
  };
};

Meteor.subscribe('workdays.list', () => {
  Store.dispatch(getWorkdays());
});

export default connect(mapStateToProps)(Home);
