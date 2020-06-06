import React from 'react';
import Square from './square';
import './board.scss';

export default function Board(props: { squares: number[] }) {
    // handlePickSquare(square: number) { return 0; };

    return (
        <div className="board">
            {props.squares.map((square, index) => {
                return (<Square token={square}></Square>);
            })}

        </div >

    );
}