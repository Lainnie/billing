import { moment } from 'meteor/momentjs:moment';

import { Workdays, Companies } from '../imports/collections';

if (!Companies.findOne()) {
  Companies.insert({
    name: 'Teezily',
    price: 450
  });
}

if (!Workdays.findOne()) {
  for (let lc = 0; lc < 4; lc++) {
    Workdays.insert({
      company: 'Teezily',
      price: 450,
      workload: 1 - (lc * 0.1),
      workdate: moment({ day: lc + 1}).valueOf()
    });
  }
}
