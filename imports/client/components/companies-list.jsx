import React from 'react';

const CompaniesList = ({ companies, chooseCompany }) => (
  <ul className="companies-list list-group">
    {companies.map(company =>
      <li
        id={company._id}
        className="list-group-item"
        key={company._id}
        onClick={chooseCompany}
      >
        {company.name}
      </li>
    )}
  </ul>
);

export default CompaniesList;
