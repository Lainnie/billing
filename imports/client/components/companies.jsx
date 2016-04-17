import React from 'react';

import { NewCompany } from '../containers';
import { Company } from '../components';

const Companies = ({ companies, newCompany }) => (
  <div className="container companies">
    <div className="page-header">
      <div className="row">
        <div className="text-center col-xs-12">
          <h1>Companies</h1>
        </div>
      </div>
    </div>

    <div className="row">
      <NewCompany {...this.props} {...newCompany} style='new' />
      {companies.map(company =>
        <Company key={company._id} {...company} />
      )}
    </div>
  </div>
);

export default Companies;
