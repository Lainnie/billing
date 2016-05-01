const initialeState = {
  placeholder: 'Enter a name',
  name: null,
  price: 0
};

export function newCompany(state = initialeState, action) {
  switch(action.type) {
    case 'CHANGE_COMPANY_NAME':
      return Object.assign({}, state, {
        name: action.payload
      });
    case 'CHANGE_COMPANY_PRICE':
      if (/^[\d]*$/.test(action.payload) === false) {
        return state;
      }

      return Object.assign({}, state, {
        price: action.payload
      });
    case 'RESET_NEW_COMPANY':
      return initialeState;
    default:
      return state;
  }
};
