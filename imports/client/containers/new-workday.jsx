import React from 'react';
import { connect } from 'react-redux';
import { $ } from 'meteor/jquery';
import { composeWithTracker } from 'react-komposer';

import {
  addWorkday,
  changeWorkload,
  changeDate,
  changeCompany,
  resetNewWorkday
} from '../actions';

import {
  PanelWorkday,
  CompaniesList
} from '../components';

import { Companies } from '../../collections';

class NewWorkdayContainer extends React.Component {

  events() {
    return {
      addWorkday: (evt) => {
        this.props.dispatch(addWorkday(this.props));
        this.props.dispatch(resetNewWorkday());
      },
      chooseDate: (evt) => {
        const $panel = $(evt.currentTarget);

        $panel.find('.js-input').datepicker({
          orientation: "bottom left",
          autoclose: true
        }).on('changeDate', (e) => {
          this.props.dispatch(changeDate(e.date.getTime()));
        });
        $panel.find('.js-input').focus();
      },
      upWorkload: () => {
        const workload = this.props.workload + 0.1;

        this.props.dispatch(changeWorkload(workload));
      },
      downWorkload: () => {
        const workload = this.props.workload - 0.1;

        this.props.dispatch(changeWorkload(workload));
      },
      showCompany: (evt) => {
        const $panel = $(evt.currentTarget).parents('.panel');

        $panel.find('.panel-body').toggle();
        $panel.find('.companies-list').toggle();
      },
      chooseCompany: (evt) => {
        const id = evt.currentTarget.id;
        const company = this.props.companies.find((company) => {
          return company._id === id;
        });

        this.props.dispatch(changeCompany(company));
      }
    };
  }

  render() {
    return <PanelWorkday
      {...this.props}
      companies_list={<CompaniesList
        companies={this.props.companies}
        chooseCompany={this.events().chooseCompany}
      />}
      style='new'
      workdate={this.props.readable_workdate}
      {...this.events()}
      />
  }
};

const composer = (props, onData) => {
  if (Meteor.subscribe('companies.list').ready()) {
    const companies = Companies.find().fetch();
    onData(null, {companies});
  }
};

export default composeWithTracker(composer)(connect()(NewWorkdayContainer));
