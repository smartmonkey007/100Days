import React from 'react';
import Square from './square';
import './board.scss';

export default function Board(props: { squares: number[], inProgress: boolean, onClick: any }) {
    const handlePickSquare = (square: any, value: number) => {
        return 0;
    };

    return (
        <div>
            {(props.inProgress === true) &&
                <div className="board">
                    {props.squares.map((square, index) => {
                        return (<Square token={square} key={index} onClick={(e: number) => props.onClick(index, e)}></Square>);
                    })}
                </div>
            }
        </div>

    );
}