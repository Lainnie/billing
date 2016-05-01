import React from 'react';

const CurrentBill = ({ currentBill }) => (
  <div>
    <h3>Current bill</h3>
    <div className="row text-center jumbotron">
      <div className="col-xs-12 col-sm-6">
        Number of days {currentBill.days}
      </div>
      <div className="col-xs-12 col-sm-6">
        Total price {currentBill.price}
      </div>
    </div>
  </div>
);

export default CurrentBill;
