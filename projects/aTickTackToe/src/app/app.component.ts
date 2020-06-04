import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { newGame, play } from './game-state/game-actions';
import { selectFeatureGame } from './game-state/game-selector';

@Component({
  selector: 'ttt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aTickTackToe';
  constructor(private store: Store) {
    this.store.pipe(select(selectFeatureGame)).subscribe((g) => console.log(`|--${JSON.stringify(g)}--|`));
    console.log(this.store.dispatch(newGame()));
    console.log(this.store.dispatch(play({ square: 1 })));
    console.log(this.store.dispatch(play({ square: 4 })));
    console.log(this.store.dispatch(play({ square: 2 })));
    console.log(this.store.dispatch(play({ square: 5 })));
    console.log(this.store.dispatch(play({ square: 3 })));
  }
}
