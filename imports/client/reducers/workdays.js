import { Workdays } from '../../collections';

export function workdays(state = [], action) {
  switch (action.type) {
    case 'GET_WORKDAYS':
      return Workdays.find().fetch();
    default:
      return state;
  }
};
