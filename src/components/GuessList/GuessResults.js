import React from 'react';
import Guess from '../Guess/Guess';

import { range } from '../../utils';
function GuessList({ guesses }) {
  const rows = range(6).map((row) =>
    // stuff here
    console.log(row)
  );
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={Math.random()}>
          <Guess submitttedGuess={guess} />
        </p>
      ))}
    </div>
  );
}

export default GuessList;
