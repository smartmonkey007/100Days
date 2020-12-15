import { evaluateGame, GameState } from '@/gameLogic';

describe('game Logic', () => {
    it.each([
        '100000000',
        '010000000',
        '001000000',
        '000100000',
        '000010000',
        '000001000',
        '000000100',
        '000000010',
        '000000001',
    ])('evaluate should return {isWinner: false, isCats: false, gameBoard: [...]}', (board) => {
        const game = board.split('').map(square => Number.parseInt(square));
        const playSquare = board.indexOf('1');
        game[0] = 1;
        const evalGame = evaluateGame(game, 1);
        expect(evalGame.isCats).toBeFalsy();
        expect(evalGame.isWinner).toBeFalsy();
    });

    it.each([
        '119000000',
        '000191000',
        '000000911',
        '900100100',
        '090010010',
        '009001001',
        '100090001',
        '009010100',
    ])('evaluate should return {isWinner: true, isCats: false, gameBoard: [...]}', (board) => {
        const game = board.split('').map(square => Number.parseInt(square));
        const playSquare = board.indexOf('9');
        game[playSquare] = 1;
        const evalGame = evaluateGame(game, 1);
        expect(evalGame.isCats).toBeFalsy();
        expect(evalGame.isWinner).toBeTruthy();
    });


    it('evaluate should return {isWinner: false, isCats: true, gameBoard: [...]}', () => {
        const game = [0, 2, 3, 4, 5, 6, 7, 8, 9];
        game[0] = 1;
        const evalGame = evaluateGame(game, 1);
        expect(evalGame.isCats).toBeTruthy();
        expect(evalGame.isWinner).toBeFalsy();
    });




})
