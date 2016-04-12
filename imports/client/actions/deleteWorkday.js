import { Meteor } from 'meteor/meteor';

export default function deleteWorkday(_id) {
  return () => {
    Meteor.call('deleteWorkday', _id);
  };
};
