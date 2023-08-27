import React from 'react';

import { ACTIONS } from './App';

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.DIGIT, pressedDigit: { digit } });
      }}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
