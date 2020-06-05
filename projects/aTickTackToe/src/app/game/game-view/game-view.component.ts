import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameLogicService } from '../../core/game-logic.service';
import { Subscription } from 'rxjs';
import { GameStates, GameResult } from '../../core/game-states';
import { Store } from '@ngrx/store';
import { newGame, play } from '../../game-state/game-actions';

@Component({
  selector: 'ttt-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit, OnDestroy {

  turn: GameResult = {} as GameResult;

  subs$: Subscription[] = [];

  constructor(private gameLogic: GameLogicService, private store: Store<{ gameState: GameResult }>) { }

  ngOnInit(): void {
    const gameLogic = this.store.select('gameState').subscribe(gs => this.turn = gs);
    this.subs$.push(gameLogic);
  }

  ngOnDestroy() {
    this.subs$.forEach(sub => sub.unsubscribe());
  }

  onPlay($event) {
    console.log($event);
    if (this.turn.gameState === GameStates.INPROGRESS) {
      this.store.dispatch(play({ square: $event }));
    }
  }

  onNewGame() {
    this.store.dispatch(newGame());
  }

}
