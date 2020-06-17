import { readable, writable, derived } from "svelte/store";
import { evaluateGame } from "./GameLogic";

const messages = [
  { player: -1, message: 'Mythical Creatures are in a clash of the ages! 🦄 ⚔ 🐲' },
  { player: 0, message: 'Unicorns and Dragons 🦄 ⚔ 🐲' },
  { player: 1, message: 'By the light of the rainbow, Unicorns are victorious 🦄' },
  { player: 2, message: 'Dragons have conqured 🐲' },

];

export const players = writable(2);
export const avatars = writable([
  { icon: "", color: `#2196f3` },
  { icon: "🦄", color: `hotpink` },
  { icon: "🐲", color: `#4caf50` }
]);

export const squareSize = writable(3);
export const winner = writable(0);
export const board = writable(Array(9).fill(0));
export const currentPlayer = writable(Math.floor(Math.random() * 2) + 1);
export const message = writable('Unicorns and Dragons 🦄 ⚔ 🐲');

export const evalateGame = (game, square, player) => {
  if (game[square] === 0) {
    game[square] = player;

    board.set(game);
    const newWinner = evaluateGame(game, player);
    winner.set(newWinner);
    message.set(messages.find(msg => msg.player === newWinner).message);
    currentPlayer.set(player === 1 ? 2 : 1)
  }

};

export const newGame = () => {
  winner.set(0);
  board.set(Array(9).fill(0));
  currentPlayer.set(Math.floor(Math.random() * 2) + 1);
  message.set('Unicorns and Dragons 🦄 ⚔ 🐲');
}
