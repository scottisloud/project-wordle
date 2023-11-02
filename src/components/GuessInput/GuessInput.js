import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guessInput">Enter guess:</label>
        <input
          type="text"
          id="guessInput"
          name="guessInput"
          pattern="^[a-zA-Z]{5,5}$"
          required
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </div>
  );
}

export default GuessInput;
