import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import { Workdays } from '../../collections';
import Workday from './workday';

Meteor.subscribe('workdays.list');

const toDate = (iso) => {
  return moment(iso.getTime()).format('D MMMM YYYY');
};

const Home = ({ workdays }) => (
  <div className="container">
    <div className="page-header">
      <div className="row">
        <div className="text-center col-xs-12">
          <h1>Accounting made easy</h1>
        </div>
      </div>
    </div>

    <div className="row">
      {workdays.map(workday =>
        <Workday key={workday._id} date={toDate(workday.workdate)} {...workday} />
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {

  return {
    workdays: Workdays.find().fetch()
  };
};

export default connect(mapStateToProps)(Home);
