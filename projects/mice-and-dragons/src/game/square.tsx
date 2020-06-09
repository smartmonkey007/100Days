import React from 'react';
import './square.scss';

export default function Square(props: { token: number, onClick: any }) {
    return (
        <div onClick={() => props.onClick(props.token)} className={`square  token-${props.token}`}>
            <span className={`token`}>{props.token}</span>
        </div>
    );
}
