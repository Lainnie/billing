import { Meteor } from 'meteor/meteor';

export default function deleteCompany(_id) {
  return () => {
    Meteor.call('deleteCompany', _id);
  };
};
