import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ submitttedGuess }) {
  const guess = range(5).map((letter) => (
    <span className="cell" key={Math.random()}>
      {submitttedGuess[letter]}
    </span>
  ));
  return <>{guess}</>;
}

export default Guess;

// function Grid({ numRows, numCols }) {
//   const rows = range(numRows).map(row => (
//     <div className="row" key={row}>
//       {range(numCols).map(col =>(
//         <div className="cell" key={col}></div>
//       ))}
//     </div>
//   ))

//   return (
//     <div className="grid">
//       {
//         rows.map(row =>(
//           row
//         ))
//       }
//     </div>
//   );
// }
