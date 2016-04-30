import { Meteor } from 'meteor/meteor';

import { Workdays, Companies } from '../imports/collections';

Meteor.methods({
  addWorkday(workday) {
    const workdays = Workdays.insert({
      company: workday.company,
      price: workday.company_price,
      workload: workday.workload,
      workdate: workday.workdate
    });

    return workdays;
  },
  deleteWorkday(_id) {
    Workdays.remove({_id});
  },
  addCompany(company) {
    const companies = Companies.insert({
      name: company.name,
      price: company.price
    });

    return companies;
  }
});
