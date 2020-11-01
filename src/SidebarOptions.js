import React from 'react'
import './SidebarOptions.css';

function SidebarOptions({ title, Icon }) {
    return (
        <div className="SidebarOptions">
            {Icon ? (<Icon className="sidebar_option_icons" />) : null}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarOptions
