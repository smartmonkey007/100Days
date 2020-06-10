import React from 'react';
import { GameResult } from '../gameLogic';

export default function GameScreen(props: { gameResult: GameResult, onClick: any }) {
    return (
        <div>
            {props.gameResult.gameState !== 'inProgress' &&
                <div>
                    {props.gameResult.message &&
                        <div>
                            <h1>{props.gameResult.message}</h1>
                        </div>
                    }

                    <button onClick={() => props.onClick()}>New Game</button>
                </div>
            }
        </div>
    );
}
