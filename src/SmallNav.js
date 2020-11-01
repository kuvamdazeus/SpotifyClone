import React from 'react'
import './SmallNav.css';
import { useDataLayerValue } from './DataLayer';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';

function SmallNav() {
    const [{ user }] = useDataLayerValue();
    return (
        <div className="SmallNav">
            <div className="nav_content">
                <PermIdentitySharpIcon className="user_icon" />
                <p className="login_info">{user && user.display_name}</p>
            </div>
        </div>
    )
}

export default SmallNav
