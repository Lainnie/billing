import { moment } from 'meteor/momentjs:moment';

const initialeState = {
  workdate: moment().valueOf(),
  readable_workdate: 'Select a date',
  workload: 0,
  company: 'Select a company'
};

export function newWorkday(state = initialeState, action) {
  switch(action.type) {
    case 'CHANGE_WORKLOAD':
      let workload = Math.round( action.workload * 10 ) / 10;

      if (workload < 0 || workload > 1) {
        return state;
      }

      return Object.assign({}, state, {
        workload: workload
      });
    case 'CHANGE_WORKDATE':
      return Object.assign({}, state, {
        workdate: action.workdate,
        readable_workdate: moment(action.workdate).format('D MMMM YYYY')
      });
    case 'RESET_NEW_WORKDAY':
      return Object.assign({}, state, initialeState);
    default:
      return state;
  }
};
