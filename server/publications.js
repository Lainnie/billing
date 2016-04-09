import { Meteor } from 'meteor/meteor';
import { Workdays } from '../imports/collections';

Meteor.publish('workdays.list', () => {
  return Workdays.find();
});
