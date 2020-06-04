import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameStates, GameResult } from './game-states';
@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  private currentState = new GameResult(2, 9);
  private winPatterns = [
    'www[w,0-9][w,0-9][w,0-9][w,0-9][w,0-9][w,0-9]', 'w[w,0-9][w,0-9]w[w,0-9][w,0-9]w[w,0-9][w,0-9]',
    'w[w,0-9][w,0-9][w,0-9]w[w,0-9][w,0-9][w,0-9]w', '[w,0-9][w,0-9]w[w,0-9]w[w,0-9]w[w,0-9][w,0-9]',
    '[w,0-9][w,0-9][w,0-9]www[w,0-9][w,0-9][w,0-9]', '[w,0-9][w,0-9][w,0-9][w,0-9][w,0-9][w,0-9]www',
    '[w,0-9]w[w,0-9][w,0-9]w[w,0-9][w,0-9]w[w,0-9]', '[w,0-9][w,0-9]w[w,0-9][w,0-9]w[w,0-9][w,0-9]w'
  ];

  turn = new BehaviorSubject<GameResult>(this.currentState);

  constructor() { }

  newGame() {
    this.currentState = new GameResult(2, 9);
    this.currentState.gameState = GameStates.INPROGRESS;
    this.turn.next(this.currentState);
  }

  nextTurn() {
    this.turn.next(this.currentState);
  }

  playSquare(square: number) {
    const player = this.currentState.player;
    const board = this.currentState.board;
    if (square <= board.length && player <= this.currentState.maxPlayers && board[square] === 0) {
      board[square] = player;
      const result = this.evaluateGame({ board, player });
      if (result > 0) {
        this.currentState.gameState = GameStates.END;
        this.currentState.isWin = true;
      } else if (result === -1) {
        this.currentState.gameState = GameStates.END;
        this.currentState.player = 0;
        this.currentState.isCats = true;
      } else {
        this.currentState.player = this.nextPlayer(this.currentState, this.currentState.maxPlayers);
      }

      this.nextTurn();
    } else {
      console.error('invalid move', square <= board.length && player <= this.currentState.maxPlayers && board[square] === 0);
    }
  }

  nextPlayer(gameState: GameResult, players: number) {
    const currentPlayer = gameState.player;
    return currentPlayer < players ? currentPlayer + 1 : 1;
  }

  evaluateGame({ board, player }: { board: number[]; player: number; }): number {
    // TODO: improve evaluation logic.
    const boardString = board.join('').replace(new RegExp(`${player}`, 'g'), 'w');

    if (this.winPatterns
      .some(win => boardString.match(win))) {
      return player;
    }

    if (board.filter(b => b === 0).length === 0) {
      return -1;
    }

    return 0;
  }

  getPlayerText(player: number) {
    return this.currentState.playerNames[player || `0`] || '';
  }



}
