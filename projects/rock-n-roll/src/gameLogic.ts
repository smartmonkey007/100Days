
const avatars: string[] = ['', '🤘', '🎸'];
const messages = {
  cats: ['🤘💥🤘 Rock on Rockin Rockers! 🎶🎸🎵'],
  player1: ['Head bangin win! 🤘💥🤘'],
  player2: ['Sick gutiar Solo win! 🎶🎸🎵'],
  player0: ['Are you ready to ROCK!'],
};

export interface GameState {
  board: number[];
  player: number;
  message: string;
  result: GameResult;
}

export interface GameResult {
  isWinner: boolean;
  isCats: boolean;
}

export const newGame: GameState = {
  board: Array(9).fill(0),
  message: messages.player0[0],
  player: 0,
  result: { isCats: false, isWinner: false }
};

export const getAvatar = (player: number) => {
  return avatars[player] ?? '';
};

export const startGame: GameState = {
  board: Array(9).fill(0),
  message: `Player ${1}'s turn ${getAvatar(1)}`,
  player: 1,
  result: { isCats: false, isWinner: false }
};

export function evaluateGame(gameBoard: number[], player: number): GameResult {
  const boardSize = Math.sqrt(gameBoard.length);
  const replaceChar = (pattern: string, withChar: number, index: number) => `${pattern.substr(0, index)}${withChar}${pattern.substr(index + 1)}`;
  let isCats = false;
  let isWinner = false;

  const pattern = () => Array(gameBoard.length + 1).join('.');
  const winPatterns = [];
  for (let index = 0; index < boardSize; index++) {
    // evaluate lines
    let rowWinPattern = pattern();
    let colWinPattern = pattern();
    for (let square = 0; square < boardSize; square++) {
      const rowReplacer = square + boardSize * index;
      rowWinPattern = replaceChar(rowWinPattern, player, rowReplacer);
      const colReplacer = (square * boardSize) + index;
      colWinPattern = replaceChar(colWinPattern, player, colReplacer);
    }

    winPatterns.push(rowWinPattern);
    winPatterns.push(colWinPattern);
  }

  // evaluate diags
  let leftDiag = pattern();
  let rightDiag = pattern();
  for (let index = 0; index < boardSize; index++) {
    leftDiag = replaceChar(leftDiag, player, index * boardSize + index);
    rightDiag = replaceChar(rightDiag, player, (index * boardSize) + (boardSize - index - 1));
  }
  winPatterns.push(leftDiag);
  winPatterns.push(rightDiag);

  for (const win of winPatterns) {
    if (gameBoard.join('').match(new RegExp(win, 'g'))) {
      isWinner = true;
      break;
    }
  }

  if (gameBoard.filter(square => square === 0).length === 0 && !isWinner) {
    isCats = true;
  }

  return { isWinner, isCats };
}

export function takeTurn(gameState: GameState, square: number) {
  if (gameState.board[square] !== 0 || gameState?.result.isCats || gameState?.result.isWinner) {
    return gameState;
  }

  gameState.board[square] = gameState.player;
  gameState.result = evaluateGame(gameState.board, gameState.player);

  if (gameState.result?.isCats || gameState?.result.isWinner) {
    if (gameState.result.isCats) {
      gameState.message = messages.cats[0];
    } else if (gameState.player === 1) {
      gameState.message = messages.player1[0];
    } else {
      gameState.message = messages.player2[0];
    }
  } else {
    gameState.player = gameState.player === 1 ? 2 : 1;
    gameState.message = `Player ${gameState.player}'s turn ${getAvatar(gameState.player)}`;
  }

  return gameState;
}
