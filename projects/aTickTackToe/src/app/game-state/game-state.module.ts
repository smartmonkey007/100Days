import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { gameStateReducer } from './game-reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ gameState: gameStateReducer })
  ],
  exports: []
})
export class GameStateModule { }
