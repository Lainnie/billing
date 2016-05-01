import React from 'react';
import { connect } from 'react-redux';

import { CardWorkday } from '../components';

import { changeCurrentBill } from '../actions';

class CardWorkdayContainer extends React.Component {

  events() {
    return {
      selectWorkday: () => {
        this.props.dispatch(changeCurrentBill(this.props));
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

export default connect()(CardWorkdayContainer);
