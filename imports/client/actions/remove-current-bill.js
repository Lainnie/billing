export default (workday) => {
  return {
    type: 'REMOVE_CURRENT_BILL',
    workday
  };
};
