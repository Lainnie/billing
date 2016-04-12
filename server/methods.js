import { Meteor } from 'meteor/meteor';

import { Workdays } from '../imports/collections';

Meteor.methods({
  addWorkday(workday) {
    const workdays = Workdays.insert({
      company: 'Teezily',
      price: 450,
      workload: workday.workload,
      workdate: workday.workdate
    });

    return workdays;
  },
  deleteWorkday(_id) {
    Workdays.remove({_id});
  }
});
