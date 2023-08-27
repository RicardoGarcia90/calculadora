import React from 'react';

import { ACTIONS } from './App';

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.OPERATION, pressedDigit: { operation } });
      }}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
