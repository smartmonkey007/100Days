import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameLogicService } from '../../core/game-logic.service';
import { Subscription } from 'rxjs';
import { GameStates, GameResult } from '../../core/game-states';

@Component({
  selector: 'ttt-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit, OnDestroy {

  turn: GameResult = {} as GameResult;

  subs$: Subscription[] = [];

  constructor(private gameLogic: GameLogicService) { }

  ngOnInit(): void {
    const gameLogic = this.gameLogic.turn.subscribe(turn => {
      this.turn = turn;
    });
    this.subs$.push(gameLogic);
  }

  ngOnDestroy() {
    this.subs$.forEach(sub => sub.unsubscribe());
  }

  onPlay($event) {
    console.log($event);
    if (this.turn.gameState === GameStates.INPROGRESS) {
      this.gameLogic.playSquare($event);
    }
  }

  onNewGame() {
    this.gameLogic.newGame();
  }

}
