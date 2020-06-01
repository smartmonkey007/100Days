import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { GameViewComponent } from './game-view/game-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

export const routes: Routes = [
  {
    path: '',
    component: GameViewComponent,
  },
];


@NgModule({
  declarations: [BoardComponent, SquareComponent, GameViewComponent, ScoreboardComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class GameModule { }
