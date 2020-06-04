import { createAction, props, resultMemoize } from '@ngrx/store';
import { GameResult, GameStates } from '../core/game-states';
import { GameLogicService } from '../core/game-logic.service';
import { GameLogic } from '../core/GameLogic';

export const newGame = createAction(
    'New Game'
);

export const play = createAction(
    'Play a square on your turn',
    props<{ square: number }>(),
    // (state: GameResult, square: number): GameResult => {
    //     return GameLogic.playSquare(state, square);
);
