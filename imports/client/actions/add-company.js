import { Meteor } from 'meteor/meteor';

export default function addCompany(company) {
  return () => {
    Meteor.call('addCompany', company);
  };
};
