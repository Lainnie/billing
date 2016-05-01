import { Meteor } from 'meteor/meteor';

export default function addWorkday(workday) {
  return () => {
    Meteor.call('addWorkday', workday);
  };
};
