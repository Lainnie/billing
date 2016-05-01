import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import { Billings } from '../components';

import {
  changeCurrentCompany,
  resetCurrentBill,
} from '../actions';

import {
  Workdays,
  Companies
} from '../../collections';

class BillingsContainer extends React.Component {
  events() {
    return {
      chooseCompany: (evt) => {
        const id = evt.currentTarget.id;
        const company = this.props.companies.find((company) => {
          return company._id === id;
        });

        this.props.dispatch(changeCurrentCompany(company));
        this.props.dispatch(resetCurrentBill());
      }
    };
  }

  render() {
    return <Billings
      {...this.props}
      {...this.events()}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    currentCompany: state.currentCompany
  };
};

const composerWorkdays = (props, onData) => {
  if (Meteor.subscribe('workdays.list').ready()) {
    const workdays = Workdays.find({company: props.currentCompany.name}, { sort: { workdate: -1 }});

    onData(null, { workdays });
  }
};

const composerCompanies = (props, onData) => {
  if (Meteor.subscribe('companies.list').ready()) {
    const companies = Companies.find({}).fetch();

    onData(null, { companies });
  }
};

let composed = composeWithTracker(composerWorkdays)(BillingsContainer);
composed = composeWithTracker(composerCompanies)(composed);

export default connect(mapStateToProps)(composed);
