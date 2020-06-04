import { GameResult, GameStates } from './game-states';

export class GameLogic {

    private static winPatterns = [
        'www[w,0-9][w,0-9][w,0-9][w,0-9][w,0-9][w,0-9]', 'w[w,0-9][w,0-9]w[w,0-9][w,0-9]w[w,0-9][w,0-9]',
        'w[w,0-9][w,0-9][w,0-9]w[w,0-9][w,0-9][w,0-9]w', '[w,0-9][w,0-9]w[w,0-9]w[w,0-9]w[w,0-9][w,0-9]',
        '[w,0-9][w,0-9][w,0-9]www[w,0-9][w,0-9][w,0-9]', '[w,0-9][w,0-9][w,0-9][w,0-9][w,0-9][w,0-9]www',
        '[w,0-9]w[w,0-9][w,0-9]w[w,0-9][w,0-9]w[w,0-9]', '[w,0-9][w,0-9]w[w,0-9][w,0-9]w[w,0-9][w,0-9]w'
    ];

    static playSquare(gameState: GameResult, square: number) {
        let state = {
            board: [...gameState.board],
            player: gameState.player,
            maxPlayers: gameState.maxPlayers,
            gameState: gameState.gameState,
            isCats: gameState.isCats,
            isWin: gameState.isWin,
            // playerNames: gameState.isWin
        };

        if (square <= state.board.length && state.player <= state.maxPlayers && state.board[square] === 0) {
            state.board[square] = state.player;
            const result = GameLogic.evaluateGame({ board: state.board, player: state.player });
            if (result > 0) {
                state.gameState = GameStates.END;
                state.isWin = true;
            } else if (result === -1) {
                state.gameState = GameStates.END;
                state.player = 0;
                state.isCats = true;
            } else {
                state.player = state.player === state.maxPlayers ? 1 : state.player++;
            }
        } else {
            console.error('invalid move', square <= state.board.length && state.player <= state.maxPlayers && state.board[square] === 0);
        }

        return state;
    }

    static nextPlayer(gameState: GameResult, players: number) {
        const currentPlayer = gameState.player;
        return currentPlayer < players ? currentPlayer + 1 : 1;
    }

    static evaluateGame({ board, player }: { board: number[]; player: number; }): number {
        // TODO: improve evaluation logic.
        const boardString = board.join('').replace(new RegExp(`${player}`, 'g'), 'w');

        if (this.winPatterns
            .some(win => boardString.match(win))) {
            return player;
        }

        if (board.filter(b => b === 0).length === 0) {
            return -1;
        }

        return 0;
    }

    getPlayerText(playerNames: [], player: number) {
        return playerNames[player] || '';
    }

}
