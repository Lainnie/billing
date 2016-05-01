import React from 'react';
import sweetalert from 'meteor/kevohagan:sweetalert';
import { connect } from 'react-redux';

import { deleteCompany } from '../actions';
import { Company } from '../components';

class CompanyContainer extends React.Component {

  events() {
    return {
      deleteCompany: (evt) => {
        evt.preventDefault();

        sweetAlert({
          title: 'Are you sure ?',
          type: 'warning',
          closeOnConfirm: true,
          showCancelButton: true
        }, () => {
          this.props.dispatch(deleteCompany(this.props._id));
        });
      }
    };
  }

  render() {
    return <Company
      {...this.props}
      {...this.events()}
      />;
  }

};

export default connect()(CompanyContainer);
