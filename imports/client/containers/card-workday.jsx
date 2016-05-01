import React from 'react';
import { connect } from 'react-redux';

import { CardWorkday } from '../components';

import {
  addCurrentBill,
  removeCurrentBill,
} from '../actions';

class CardWorkdayContainer extends React.Component {

  events() {
    return {
      selectWorkday: () => {
        this.props.dispatch(addCurrentBill(this.props));
      },
      unselectWorkday: () => {
        this.props.dispatch(removeCurrentBill(this.props));
      }
    };
  }

  render() {
    return <CardWorkday
      {...this.props}
      {...this.events()}
      />;
  }

};

const mapStateToProps = (state) => {
  return {
    workdays: state.currentBill.workdays
  };
};

export default connect(mapStateToProps)(CardWorkdayContainer);
