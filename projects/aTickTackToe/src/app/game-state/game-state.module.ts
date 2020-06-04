import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as GameReducer from './game-reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ reducer: GameReducer.reducer })
  ],
  exports: []
})
export class GameStateModule { }
