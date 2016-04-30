import { combineReducers } from 'redux';

import { newWorkday } from './newWorkday';
import { newCompany } from './newCompany';
import { currentCompany } from './currentCompany';

const rootReducer = combineReducers({
  newWorkday,
  newCompany,
  currentCompany
});

export default rootReducer;
