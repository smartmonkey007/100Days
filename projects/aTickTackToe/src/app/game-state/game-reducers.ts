import { State, createReducer, on, Action } from '@ngrx/store';
import { GameStates, GameResult } from '../core/game-states';
import * as gameActions from './game-actions';
import { GameLogic } from '../core/GameLogic';

export const initialState: GameResult = {
    gameState: GameStates.NEW,
    isWin: false,
    isCats: false,
    board: [],
    player: 0,
    maxPlayers: 2,
    playerNames: [],
};

const gameReducer = createReducer(
    initialState,
    on(gameActions.newGame, (state) => new GameResult(2, 9)),
    on(gameActions.play, (state, { square }) => ({ ...state, ...GameLogic.playSquare({ ...state }, square) })),
);

export function reducer(state: GameResult | undefined, action: Action) {
    return gameReducer(state, action);
}
