import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameStates } from './game-states';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  private board = new Array(9).fill(0);
  private currentPlayer = 1;
  playerTurn = new BehaviorSubject<{ board: number[], player: number }>({ board: this.board, player: this.currentPlayer });
  gameState = new BehaviorSubject<GameStates>(GameStates.NEW);

  players = 2;


  constructor() { }

  playSquare(square: number, player: number) {
    if (square <= this.board.length && player <= this.players && this.board[square] === 0) {
      this.board[square] = player;
      if (this.evaluateGame(this.board, player)) {
        this.gameState.next(GameStates.END);
      } else {
        this.nextPlayer();
      }

      return true;
    }

    return false;

  }

  nextPlayer() {
    this.currentPlayer = this.currentPlayer < this.currentPlayer ? this.currentPlayer += 1 : 1;
    this.playerTurn.next({ board: this.board, player: this.currentPlayer });
  }

  evaluateGame(board: number[], player: number) {
    // TODO: improve evaluation logic.
    const boardString = board.join('');
    if (boardString.search(`${player}${player}${player}`)) {
      return player;
    }

    return 0;
  }



}
