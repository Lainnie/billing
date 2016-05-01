import React from 'react';
import { connect } from 'react-redux';

import { CurrentBill } from '../components';

class CurrentBillContainer extends React.Component {

  render() {
    return <CurrentBill {...this.props} />;
  }
};

const mapStateToProps = (state) => {
  return {
    currentBill: state.currentBill
  };
};

export default connect(mapStateToProps)(CurrentBillContainer);
