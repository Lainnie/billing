import React from 'react';

const toDate = (iso) => {
  return moment(iso.getTime()).format('D MMMM YYYY');
}

const Workday = ({workdate, workload, company}) => (
  <div className="col-xs-12 col-sm-2">
    <div className="panel panel-primary text-center">
      <div className="panel-heading">{toDate(workdate)}</div>
      <div className="panel-body">
        <h1>{workload}</h1>
      </div>
      <div className="panel-footer">{company}</div>
    </div>
  </div>
)

export default Workday;
