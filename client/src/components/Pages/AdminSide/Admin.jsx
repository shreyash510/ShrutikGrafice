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
            {/* <div className="container row g-3 relative top-64">
                <div className="col-md-4">
                    <div className="card">
                        <p>Total Order</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <p>Total Users</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <p>Total Product</p>
                    </div>
                </div> 

            </div>*/}
        </>
    )
}
export default AdminPanel;