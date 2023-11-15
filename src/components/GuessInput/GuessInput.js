import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTenatativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    console.log({ tentativeGuess });
    setTenatativeGuess('');
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
          value={tentativeGuess}
          onChange={(event) => {
            setTenatativeGuess(event.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </div>
  );
}

export default GuessInput;
