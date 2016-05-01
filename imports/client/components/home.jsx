import React from 'react';

import { NewWorkday, Workday } from '../containers';

import { toDate } from '../helpers';

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

export default Home;
