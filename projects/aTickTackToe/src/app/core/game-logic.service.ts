import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameStates, GameResult } from './game-states';
@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  private board = new Array(9).fill(0);
  private currentPlayer = 0;
  playerTurn = new BehaviorSubject<{ board: number[], player: number }>({ board: this.board, player: this.currentPlayer });
  private currentGameState = GameStates.NEW;
  gameState = new BehaviorSubject<GameStates>(this.currentGameState);

  private playerNames = ['', 'X', 'O'];
  players = 2;


  constructor() { }

  newGame() {
    this.currentPlayer = 0;
    this.board = new Array(9).fill(0);
    this.currentGameState = GameStates.INPROGRESS;
    this.gameState.next(this.currentGameState);
    this.nextPlayer();
  }

  playSquare(square: number) {
    const player = this.currentPlayer;
    if (square <= this.board.length && player <= this.players && this.board[square] === 0) {
      this.board[square] = player;
      const result = this.evaluateGame({ board: this.board, player });
      console.log(result);
      if (result.gameState === GameStates.END) {
        this.currentGameState = GameStates.END;
        this.gameState.next(this.currentGameState);
      } else {
      }
      this.nextPlayer();

      return true;
    }

    return false;

  }

  nextPlayer() {
    this.currentPlayer = this.currentPlayer < this.players ? this.currentPlayer += 1 : 1;
    this.playerTurn.next({ board: this.board, player: this.currentPlayer });
  }

  evaluateGame({ board, player }: { board: number[]; player: number; }): GameResult {
    // TODO: improve evaluation logic.
    const boardString = board.join('');
    console.log(boardString);
    if (boardString.search(`${player}${player}${player}`)) {
      // return { gameState: GameStates.END, isCats: false, winner: player };
    }

    if (board.filter(b => b === 0).length === 0) {
      return { gameState: GameStates.END, isCats: true, winner: 0 };
    }

    return { gameState: GameStates.INPROGRESS, isCats: false, winner: 0 };
  }

  getPlayerText(player: number) {
    return this.playerNames[player] || '';
  }



}
