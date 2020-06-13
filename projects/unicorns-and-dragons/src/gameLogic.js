import { writable } from 'svelte/store';

export function GameLogic() {

    export let players = writable(2);
    export let avatars = writeable(['', '🦄', '🐲']);

    export let board = writeable(Array(9).fill(0));


}
