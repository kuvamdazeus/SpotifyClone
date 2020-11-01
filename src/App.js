import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import { getAccessToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

function App() {
  const spotify = new SpotifyWebApi();

  const [{ user, token, homeSongs }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const UrlToken = getAccessToken();
    console.log(UrlToken);

    if (UrlToken != null && UrlToken.length > 50) {
      
      dispatch({
        type: 'SET_TOKEN',
        token: UrlToken,
      });

      spotify.setAccessToken(UrlToken);

      spotify.getMe()
      .then((user) => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });

      spotify.getMyTopTracks()
      .then((tracks) => {
        let songs = [];
        tracks.items.map((song) => {
          let song_details = [];
          let url = song.album.images[2].url;
          let name = song.name;
          let artist = song.album.artists[0].name;
          
          song_details = [name, artist, url];

          songs.push(song_details);
        });

        dispatch({
          type: 'SET_HOME_SONGS',
          homeSongs: songs,
        })

        // console.log("SONGS: ", homeSongs);
        // console.log("USER TRACKS CAN BE FOUND HERE: ", homeSongs);
      });

      spotify.getMyRecentlyPlayedTracks()
      .then((tracks) => {
        const currentlyPlaying = tracks.items[0].track;

        dispatch({
          type: 'SET_CURRENTLY_PLAYING',
          currentlyPlaying: currentlyPlaying,
        });
      });

    }
  }, []);

  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }
      <div className="copy_content">
        <p className="copyrights">Made with 🔥 By KuvamBhardwaj</p>
      </div>
    </div>
  );
}

export default App;
