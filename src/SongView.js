import React from 'react'
import './SongView.css';
import { useDataLayerValue } from './DataLayer';
import Song from './Song';

function SongView() {
    const [{ homeSongs }] = useDataLayerValue();

    return (
        <div className="SongView">
            <div className="Songs">
                {homeSongs && homeSongs.map(song => (
                    <Song name={song[0]} artist={song[1]} url={song[2]} />
                ))}
            </div>
        </div>
    )
}

export default SongView
