import { Workdays } from '../../collections';

export default function workdays(state = [], action) {
  switch (action.type) {
    case 'GET_WORKDAYS':
      return Workdays.find();
    default:
      return state;
  }
};
