import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [victory, setVictory] = React.useState(undefined);

  function handleSubmitGuess(tentativeGuess) {
    console.log('NUMBER OF GUESSES ', NUM_OF_GUESSES_ALLOWED);
    console.log('NUMBER OF GUESSES MINUS ONE ', NUM_OF_GUESSES_ALLOWED - 1);
    const numberOfGuesses = guesses.length + 1;
    console.log('NUMBER OF GUESSES SO FAR: ', numberOfGuesses);
    if (numberOfGuesses < NUM_OF_GUESSES_ALLOWED) {
      const nextGuesses = [...guesses, tentativeGuess];
      setGuesses(nextGuesses);
      if (tentativeGuess === answer) {
        setVictory(true);
      }
    } else if (numberOfGuesses === NUM_OF_GUESSES_ALLOWED) {
      const nextGuesses = [...guesses, tentativeGuess];
      setGuesses(nextGuesses);
      if (tentativeGuess === answer) {
        setVictory(true);
      } else {
        setVictory(false);
      }
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {victory === true && <HappyBanner guesses={guesses} />}
      {victory === false && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
