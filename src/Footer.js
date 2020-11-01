import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousSharpIcon from '@material-ui/icons/SkipPreviousSharp';
import SkipNextSharpIcon from '@material-ui/icons/SkipNextSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDataLayerValue } from './DataLayer';

function Footer() {
    const [{ currentlyPlaying }] = useDataLayerValue();
    const track = currentlyPlaying;
    var artist_names = [];

    const buttonStyles = {
        Icon: {
            width: "60px",
        },
    };

    return (
        <div className="Footer">
            {/* Current song with image, name and artist */}

            {console.log("CURRENTLY PLAYING: ", track)}

            <div className="current_playing_image">
                {track && (<img src={track.album.images[0].url} style={{width: "70px"}} />)}
            </div>

            <div className="current_playing_name">
                <div className="current_name_and_icon">
                    <p className="current_track_name">{track && track.name}</p>
                    <FavoriteBorderIcon className="favourite_icon" />
                </div>
                <div className="current_playing_artist">
                    {/* Artist here */}
                    {track && track.artists.map((artist) => {
                        artist_names.push(artist.name);
                    })}
                    <p className="current_artists">{artist_names.join(", ")}</p>
                </div>
            </div>

            <div className="current_icons">
                <SkipPreviousSharpIcon className="icons" style={{fontSize: 38}} />
                <PlayCircleOutlineIcon className="icons" style={{fontSize: 38}} />
                <SkipNextSharpIcon className="icons" style={{fontSize: 38}} />
            </div>
            {/* Icon set of back, play, next ; Progress bar */}
        </div>
    )
}

export default Footer
