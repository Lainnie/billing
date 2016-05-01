import { combineReducers } from 'redux';

import { newWorkday } from './new-workday';
import { newCompany } from './new-company';
import { currentCompany } from './current-company';
import { currentBill } from './current-bill';

const rootReducer = combineReducers({
  newWorkday,
  newCompany,
  currentCompany,
  currentBill,
});

export default rootReducer;
