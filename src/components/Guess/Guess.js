import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${checkedGuess ? checkedGuess[num].status : ''}`}
        >
          {checkedGuess ? checkedGuess[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
