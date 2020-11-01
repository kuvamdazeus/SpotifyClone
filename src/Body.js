import React from 'react';
import './Body.css';
import Header from './Header';
import SongView from './SongView';
import SmallNav from './SmallNav';

function Body() {
    return (
        <div className="Body">
            <SmallNav />
            <Header />
            <SongView />
        </div>
    )
}

export default Body
