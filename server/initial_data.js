import { moment } from 'meteor/momentjs:moment';

import { Workdays } from '../imports/collections/index';

if (!Workdays.findOne()) {
  for (let lc = 0; lc < 4; lc++) {
    Workdays.insert({
      company: 'Teezily',
      price: 450,
      workload: 1 - (lc * 0.1),
      workdate: moment({ day: lc + 1}).toDate()
    });
  }
}
