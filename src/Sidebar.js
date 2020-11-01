import React from 'react'
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import LibraryMusicSharpIcon from '@material-ui/icons/LibraryMusicSharp';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="Sidebar">
            <img
                className="sidebar_logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify"
            />
            <SidebarOptions title="Home" Icon={HomeSharpIcon} />
            <SidebarOptions title="Search" Icon={SearchSharpIcon} />
            <SidebarOptions title="Your Library" Icon={LibraryMusicSharpIcon} />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            <p>
                {playlists?.items?.map(playlist => (
                    <SidebarOptions title={playlist.name} />
                ))}
            </p>
        </div>
    )
}

export default Sidebar
