export default (workday) => {
  return {
    type: 'CHANGE_CURRENT_BILL',
    workday
  };
};
