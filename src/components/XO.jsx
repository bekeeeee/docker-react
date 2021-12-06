import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

const Square=(props) =>{
    return (
      <div
        className="square"
        style={squareStyle}
        onClick={props.onClick}
        >
    {props.value}
      </div>
    );
}

const Board= (props)=> {
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span></div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
        <button style={buttonStyle}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square value="1" />
            <Square />
            <Square />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    );
  
}

const Game = ()=> {
  const [history ,setHistory]= useState([Array(9).fill(null)]);
  const [oIsNext,setOisNext] = useState(false);
  const [stepNumber , setStepNumber] = useState(true);
  const winner = calculateWinner(history[stepNumber])
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  
}

const calculateWinner=(squares)=>{
  const winnerLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i =0; i<winnerLines.length; i++){
    const [a, b, c]= winnerLines[i]

    if(squares[a] && squares[b] === squares[b] && squares[a] === squares[c] )
      return squares[a]
  }
  return null
}

export default Game