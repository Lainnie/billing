import React from 'react';

import { CompaniesButton } from '.';

import {
  CardWorkday,
  CurrentBill,
} from '../containers';

const Billings = (props) => (
  <div className="container billings">
    <div className="page-header">
      <div className="row">
        <div className="text-center col-xs-12">
          <h1>Billings</h1>
        </div>
      </div>
    </div>

    <CompaniesButton {...props} />
    <hr />

    <CurrentBill {...props} />
    <hr />

    <div className="jumbotron row">
      {props.workdays.map(workday =>
        <CardWorkday key={workday._id} {...workday} />
      )}
    </div>
  </div>
);

export default Billings;
