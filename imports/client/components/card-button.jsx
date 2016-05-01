import React from 'react';

const ButtonCheck = ({ onUncheck }) => (
  <div onClick={onUncheck} className="col-xs-2">
    <a className="btn btn-warning">✗</a>
  </div>
);

const ButtonUncheck = ({ onCheck }) => (
  <div onClick={onCheck} className="col-xs-2">
    <a className="btn btn-success">✓</a>
  </div>
);

const CardButton = ({ checked, onCheck, onUncheck }) => {
  if (checked) {
    return <ButtonUncheck onCheck={ onCheck } />
  } else {
    return <ButtonCheck onUncheck={ onUncheck } />
  }
};

export default CardButton;
