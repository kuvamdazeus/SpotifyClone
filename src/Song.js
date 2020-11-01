import React from 'react'
import './Song.css';

function Song({ name, artist, url }) {
    return (
        <div className="Song">
            <div className="song_image">
                <img src={url} />
            </div>
            <div className="song_text">
                <p>{name}</p>
            </div>
            <div className="song_artists">
                <p className="song_artist">{artist}</p>
            </div>
        </div>
    )
}

export default Song
