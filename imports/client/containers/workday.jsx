import React from 'react';
import { connect } from 'react-redux';
import { $ } from 'meteor/jquery';
import { moment } from 'meteor/momentjs:moment';
import sweetalert from 'meteor/kevohagan:sweetalert';

import { deleteWorkday } from '../actions';
import { PanelWorkday } from '../components';

class WorkDayContainer extends React.Component {
  events() {
    return {
      deleteWorkday: (evt) => {
        evt.preventDefault();

        sweetAlert({
          title: 'Are you sure ?',
          type: 'warning',
          closeOnConfirm: true,
          showCancelButton: true
        }, () => {
          this.props.dispatch(deleteWorkday(this.props._id));
        });
      }
    };
  }

  render() {
    return <PanelWorkday
      {...this.props}
      {...this.events()}
    />
  }
};

export default connect()(WorkDayContainer);
