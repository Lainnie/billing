import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import { Companies as CompaniesCollection } from '../../collections';
import { Companies } from '../components';

class CompaniesComponent extends React.Component {
  render() {
    return <Companies {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    newCompany: state.newCompany
  };
};

const composer = (props, onData) => {
  if (Meteor.subscribe('companies.list').ready()) {
    const companies = CompaniesCollection.find().fetch();
    onData(null, { companies });
  }
};

const CompaniesContainer = connect(mapStateToProps)(CompaniesComponent);

export default composeWithTracker(composer)(CompaniesContainer);
