import React from 'react';

const Company = (props) => (
  <div className="company col-xs-12 col-sm-4">
    <div className={"panel panel-primary text-center " + props.style}>
      <a href="#" onClick={props.addCompany} className="create btn btn-success">
        <i className="glyphicon glyphicon-plus"></i>
      </a>

      <div className="panel-heading">
        <input
          onChange={props.changeName}
          className="heading-input"
          placeholder={props.placeholder}
          readOnly={!props.changeName}
          value={props.name} />
      </div>

      <div className="panel-body">
        <h1>
          <input
            onChange={props.changePrice}
            className="body-input"
            placeholder={props.placeholder}
            readOnly={!props.changePrice}
            value={props.price} />
          </h1>
      </div>

      <div className="panel-footer">
        Total workday ?
        <a href="#" onClick={props.deleteWorkday} className="delete btn btn-danger">
          <i className="glyphicon glyphicon-minus"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Company;
