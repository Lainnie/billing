import { Meteor } from 'meteor/meteor';

export default function addWorkday() {
  return () => {
    Meteor.call('addWorkday');
  };
};
