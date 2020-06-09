import React, { useState, useEffect } from 'react';
import Board from './game/board';
import GameScreen from './game/gameScreen';
import { GameResult, GameLogic } from './gameLogic';
import './MiceAndDragons.scss';

const initialGameState = new GameResult(2, 9);


export default function MiceAndDragons() {
  const [gameState, takeTurn] = useState(initialGameState);

  useEffect(() => {
    console.log(gameState);
  });

  const doPickSquare = (square: any, value: any) => {
    console.log('mice', square, value);
    if (value === 0) {
      takeTurn({ ...gameState, ...GameLogic.playSquare(gameState, square) });

    }
  };

  return (
    <div className="App">
      <GameScreen gameResult={gameState}></GameScreen>
      <Board inProgress={gameState.gameState === 'inprogress'} squares={gameState.board} onClick={(square: any, value: any) => doPickSquare(square, value)}></Board>
    </div>
  );
}

