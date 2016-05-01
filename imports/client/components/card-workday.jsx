import React from 'react';
import {
  toDate,
  modelIsInCollection,
} from '../helpers';
import { CardButton } from '.';

const CardWorkday = (props) => (
  <div className="card-workday col-xs-12 col-sm-6 col-md-4">
    <div className="panel panel-primary text-center">
      <div className="panel-heading">
        <div className="row">
          <div className="col-xs-7">
            <p>Date</p>
            {toDate(props.workdate)}
          </div>
          <div className="col-xs-3">
            <p>Load</p>
            {props.workload}
          </div>
          <CardButton
            onCheck={props.selectWorkday}
            onUncheck={props.unselectWorkday}
            checked={!modelIsInCollection(props.workdays, props)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default CardWorkday;
