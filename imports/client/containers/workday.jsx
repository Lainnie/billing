import React from 'react';
import { connect } from 'react-redux';
import { $ } from 'meteor/jquery';
import { moment } from 'meteor/momentjs:moment';

import { deleteWorkday } from '../actions';
import Workday from '../components/workday';

class WorkDayContainer extends React.Component {
  events() {
    return {
      deleteWorkday: (evt) => {
        evt.preventDefault();

        this.props.dispatch(deleteWorkday(this.props._id));
      }
    };
  }

  render() {
    return <Workday
      {...this.props}
      {...this.events()}
    />
  }
};

export default connect()(WorkDayContainer);
