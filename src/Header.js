import React from 'react';
import './Header.css';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }] = useDataLayerValue();

    return (
        <div className="Header">
            <div className="header_content">
                {console.log(user?.images, user?.images[0]?.url)}
                <div className="header_image">
                    {user?.images ? (<img src={user?.images[0]?.url} style={{borderRadius: "200px", width: "200px", marginRight: "20px"}} />) : (<img src="" style={{borderRadius: "200px", width: "200px", marginRight: "20px"}} />)}
                </div>
                <div className="header_text">
                    <h1>My Top Tracks</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
