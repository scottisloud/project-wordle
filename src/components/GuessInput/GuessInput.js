import React from "react";

function GuessInput() {
  return (
    <div>
      <form className="guess-input-wrapper">
        <label htmlFor="guessInput">Enter guess:</label>
        <input type="text" id="guessInput" name="guessInput"></input>
      </form>
    </div>
  );
}

export default GuessInput;
