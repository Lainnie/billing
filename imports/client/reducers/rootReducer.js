import { combineReducers } from 'redux';

import { workdays } from './workdays';
import { newWorkday } from './newWorkday';

const rootReducer = combineReducers({
  workdays,
  newWorkday
});

export default rootReducer;
