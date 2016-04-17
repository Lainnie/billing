import { combineReducers } from 'redux';

import { newWorkday } from './newWorkday';
import { newCompany } from './newCompany';

const rootReducer = combineReducers({
  newWorkday,
  newCompany
});

export default rootReducer;
