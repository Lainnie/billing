import React from 'react';

import { CardWorkday } from '../components';

const Billings = ({ workdays }) => (
  <div className="container billings">
    <div className="page-header">
      <div className="row">
        <div className="text-center col-xs-12">
          <h1>Billings</h1>
        </div>
      </div>
    </div>

    <div className="row">
      {workdays.map(workday =>
        <CardWorkday key={workday._id} {...workday} />
      )}
    </div>
  </div>
);

export default Billings;
