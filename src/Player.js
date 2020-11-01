import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import './Player.css';

function Player({ spotify }) {
    return (
        <div className="Player">
            <div className="player_body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player;
