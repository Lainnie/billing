import React from 'react';
import { toDate } from '../helpers';

const CardWorkday = (props) => (
  <div onClick={props.selectWorkday} className="card-workday col-xs-12 col-sm-6 col-md-4">
    <div className="panel panel-primary text-center">
      <div className="panel-heading">
        <div className="row">
          <div className="col-xs-8">
            Date: {toDate(props.workdate)}
          </div>
          <div className="col-xs-4">
            Load: {props.workload}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardWorkday;
