import React from 'react';
import Board from './game/board'
import logo from './logo.svg';
import './MiceAndDragons.scss';
import { GameResult } from './gameLogic';

const gameState = new GameResult(2, 9);

// doPickSquare(square) { }

function MiceAndDragons() {
  return (
    <div className="App">
      <Board squares={gameState.board}></Board>
    </div>
  );
}

export default MiceAndDragons;
