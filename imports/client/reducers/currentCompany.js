const initialeState = {
  _id: null,
  name: null,
  price: 0
};

export function currentCompany(state = initialeState, action) {
  switch(action.type) {
    case 'CHANGE_CURRENT_COMPANY':
      return action.company;
    default:
      return state;
  }
};
