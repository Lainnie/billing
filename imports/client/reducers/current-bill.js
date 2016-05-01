import { lodash as _ } from 'meteor/stevezhu:lodash';
import {
  priceWithWorkload,
  modelIsInCollection,
} from '../helpers';

const initialeState = {
  days: 0,
  price: 0,
  workdays: []
};

export function currentBill(state = initialeState, action) {
  switch(action.type) {
    case 'ADD_CURRENT_BILL':
      if (modelIsInCollection(state.workdays, action.workday)) {
        return state;
      }

      return Object.assign({}, state, {
        days: state.days + 1,
        price: state.price + priceWithWorkload(action.workday),
        workdays: [...state.workdays, action.workday]
      });
    case 'REMOVE_CURRENT_BILL':
      if (!modelIsInCollection(state.workdays, action.workday)) {
        return state;
      }

      return Object.assign({}, state, {
        days: state.days - 1,
        price: state.price - priceWithWorkload(action.workday),
        workdays: _.filter(state.workdays, (workday) => {
          return workday._id !== action.workday._id;
        })
      });
    case 'RESET_CURRENT_BILL':
      return initialeState;
    default:
      return state;
  }
};

