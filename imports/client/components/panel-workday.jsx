import React from 'react';

const PanelWorkday = (props) => (
  <div className="workday col-xs-12 col-sm-4 col-md-3 col-lg-2">
    <div className={"panel panel-primary text-center " + props.style}>
      <a href="#" onClick={props.addWorkday} className="create btn btn-success">
        <i className="glyphicon glyphicon-plus"></i>
      </a>
      <div onClick={props.chooseDate} className="panel-heading">
        <input className="date-input js-input" />
        <div className="row">
          <div className="col-xs-12">{props.workdate}</div>
        </div>
      </div>
      {props.companies_list}
      <div className="panel-body">
        <span onClick={props.upWorkload} className="dropup">
          <span className="caret"></span>
        </span>
        <h1>{props.workload}</h1>
        <span onClick={props.downWorkload} className="caret"></span>
      </div>
      <div className="panel-footer">
        <p onClick={props.showCompany} className="company">{props.company}</p>
        <a href="#" onClick={props.deleteWorkday} className="delete btn btn-danger">
          <i className="glyphicon glyphicon-minus"></i>
        </a>
      </div>
    </div>
  </div>
);

export default PanelWorkday;
