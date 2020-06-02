import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameLogicService } from '../../core/game-logic.service';
import { Subscription } from 'rxjs';
import { GameStates } from '../../core/game-states';

@Component({
  selector: 'ttt-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit, OnDestroy {

  gameState: GameStates;
  board: number[];
  player: number;

  subs$: Subscription[] = [];

  constructor(private gameLogic: GameLogicService) { }

  ngOnInit(): void {
    let gameLogic = this.gameLogic.gameState.subscribe(state => this.gameState = state);
    this.subs$.push(gameLogic);
    gameLogic = this.gameLogic.playerTurn.subscribe(turn => {
      this.board = turn.board;
      this.player = turn.player;
    });

  }

  ngOnDestroy() {
    this.subs$.forEach(sub => sub.unsubscribe());
  }

  onPlay($event) {
    console.log($event);
    if (this.gameState === GameStates.INPROGRESS) {
      this.gameLogic.playSquare($event);
    }
  }

  onNewGame() {
    this.gameLogic.newGame();
  }

}
