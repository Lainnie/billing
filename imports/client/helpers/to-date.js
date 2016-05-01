import { moment } from 'meteor/momentjs:moment';

export default (timeStamp) => {
  return moment(timeStamp).format('D MMMM YYYY');
};

