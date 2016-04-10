import React from 'react';
import { moment } from 'meteor/momentjs:moment';

const Workday = (props) => (
  <div className="workday col-xs-12 col-sm-4 col-md-3 col-lg-2">
    <div className={"panel panel-primary text-center " + props.style}>
      <a href="#" onClick={props.addWorkday} className="create btn btn-success">
        <i className="glyphicon glyphicon-plus"></i>
      </a>
      <div onClick={props.chooseDate} className="panel-heading">
        <input className="date-input js-input" />
        <div className="row">
          <div className="col-xs-9">{props.workdate}</div>
          <div className="col-xs-2">
            <span className="glyphicon glyphicon-th"></span>
          </div>
        </div>
      </div>
      <div className="panel-body">
        <span onClick={props.upWorkload} className="dropup">
          <span className="caret"></span>
        </span>
        <h1>{props.workload}</h1>
        <span onClick={props.downWorkload} className="caret"></span>
      </div>
      <div className="panel-footer">{props.company}</div>
    </div>
  </div>
);

export default Workday;
