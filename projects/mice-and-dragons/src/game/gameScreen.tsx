import React from 'react';
import { GameResult } from '../gameLogic';

export default function GameScreen(props: { gameResult: GameResult }) {
    return (
        <div>
            {props.gameResult.gameState !== 'inprogress' &&
                <h1>Of Mice and Dragons!</h1>
            }
        </div>
    );
}
