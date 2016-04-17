import { Meteor } from 'meteor/meteor';
import { Workdays, Companies } from '../imports/collections';

Meteor.publish('workdays.list', () => {
  return Workdays.find({}, {sort:  {workdate: -1}});
});

Meteor.publish('companies.list', () => {
  return Companies.find({});
});
