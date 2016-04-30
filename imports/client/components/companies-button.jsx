import React from 'react';

const CompaniesButton = ({ companies, chooseCompany, currentCompany }) => (
  <div className="row">
    {companies.map(company =>
      <a
        key={company._id}
        id={company._id}
        onClick={chooseCompany}
        className={"col-xs-12 col-sm-4 btn btn-" + (company._id === currentCompany._id ? 'success' : 'primary')}
      >{company.name}</a>
    )}
  </div>
);

export default CompaniesButton;
