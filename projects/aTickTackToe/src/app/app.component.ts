import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { newGame, play } from './game-state/game-actions';
// import { selectFeatureGame } from './game-state/game-selector';
import { GameResult } from './core/game-states';
import { gameStateReducer } from './game-state/game-reducers';
@Component({
  selector: 'ttt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cats and Dogs, Fight! 🐱⚔🐶';
  constructor() {
  }
}
