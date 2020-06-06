import React from 'react';
import '../app.scss';
import '../_variables.scss';

function AppBar() {
    return (
        <header className="app-header">
            <h1>Mice and Dragons, Fight!
                <span aria-label="mouse"
                    role="img">🐭</span>
                <span aria-label="fight" role="img">⚔</span>
                <span aria-label="dragon" role="img">🐉</span></h1>
        </header>
    );
}

export default AppBar;
