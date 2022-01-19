import React, { useState } from 'react';
import '../../styling/AdminPanel.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

const AdminPanel = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <>
            <div className="admin">
                <p>Dashboard</p>
                <Link to='#' onClick={showSidebar}>
                    <MenuOpenRoundedIcon />
                    
                </Link>
            </div>
            <div
                className={sidebar ? "sidebar-container active" : "sidebar-container"}
            >
                <ul className="sidebar-items">
                    <li className="sidebar-toggle">
                        <Link to="#" className="menu-icon" onClick={showSidebar}>
                            <MenuOpenRoundedIcon />
                        </Link>
                    </li>
                    {SidebarData.map((sidebaritem) => {
                        return (
                            <li
                                key={sidebaritem.id}
                                className={sidebaritem.cName}
                                onClick={showSidebar}
                            >
                                <Link to={sidebaritem.path}>
                                    <span>{sidebaritem.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </>
    )
}
export default AdminPanel;