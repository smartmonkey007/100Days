import React from 'react';
import './square.scss';
import { gameTextConversion } from '../gameLogic';

export default function Square(props: { token: number, onClick: any }) {
    return (
        <div onClick={() => props.onClick(props.token)} className={`square  token-${props.token}`}>
            <span className={`token`}>{gameTextConversion(props.token)}</span>
        </div>
    );
}
