import React from 'react';

const Company = (props) => (
  <div className="company col-xs-12 col-sm-4 col-md-3 col-lg-2">
    <div className="panel panel-primary text-center">
      <a href="#" onClick={props.addCompany} className="create btn btn-success">
        <i className="glyphicon glyphicon-plus"></i>
      </a>
      <div className="panel-heading">
        <div className="row">
          <div className="col-xs-9">{props.name}</div>
          <div className="col-xs-2">
            <span className="glyphicon glyphicon-briefcase"></span>
          </div>
        </div>
      </div>
      <div className="panel-body">
        <h1>{props.price}</h1>
        <a href="#" onClick={props.deleteWorkday} className="delete btn btn-danger">
          <i className="glyphicon glyphicon-minus"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Company;
