import React from 'react';
import { connect } from 'react-redux';

import { Company } from '../components';
import {
  changeCompanyName,
  changeCompanyPrice,
  addCompany,
  resetNewCompany
} from '../actions';

class NewCompany extends React.Component {

  events() {
    return {
      addCompany: () => {
        this.props.dispatch(addCompany(this.props));
        this.props.dispatch(resetNewCompany());
      },
      changeName: (evt) => {
        const $input = $(evt.currentTarget);

        this.props.dispatch(changeCompanyName($input.val()));
      },
      changePrice: (evt) => {
        const $input = $(evt.currentTarget);

        this.props.dispatch(changeCompanyPrice($input.val()));
      }
    };
  }

  render() {
    return <Company {...this.props} {...this.events()} />
  }
}

export default connect()(NewCompany);
