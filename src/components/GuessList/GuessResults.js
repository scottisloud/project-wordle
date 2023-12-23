import React from 'react';
import Guess from '../Guess/Guess';

import { range } from '../../utils';
function GuessList({ guesses }) {
  const rows = range(6).map((row) =>
    guesses.map((guess) => (
      <p className="guess" key={Math.random()}>
        <Guess submitttedGuess={guess} />
      </p>
    ))
  );
  return <div className="guess-results">{rows.map((row) => row)}</div>;
}

export default GuessList;
