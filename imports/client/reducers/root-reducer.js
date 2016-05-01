import { combineReducers } from 'redux';

import { newWorkday } from './new-workday';
import { newCompany } from './new-company';
import { currentCompany } from './current-company';

const rootReducer = combineReducers({
  newWorkday,
  newCompany,
  currentCompany
});

export default rootReducer;
