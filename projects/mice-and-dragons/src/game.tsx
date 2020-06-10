import React, { useState } from 'react';
import Board from './game/board';
import GameScreen from './game/gameScreen';
import { GameResult, GameLogic } from './gameLogic';
import './game.scss';

const initialGameState = new GameResult(2, 9);

export default function MiceAndDragons() {
  const [gameState, setGameState] = useState(initialGameState);

  const doPickSquare = (square: any, value: any) => {
    console.log('mice', square, value);
    if (value === 0) {
      setGameState({ ...gameState, ...GameLogic.playSquare(gameState, square) });
    }
  };

  const startNewGame = () => {
    setGameState({ ...new GameResult(2, 9), gameState: 'inProgress' });
  }

  return (
    <div className="App">
      <GameScreen gameResult={gameState} onClick={() => startNewGame()}></GameScreen>
      <Board inProgress={gameState.gameState === 'inProgress'} squares={gameState.board} onClick={(square: any, value: any) => doPickSquare(square, value)}></Board>
    </div>
  );
}

