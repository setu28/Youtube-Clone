import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    
    if(!isMenuOpen) return null;

    return(
        <div className="p-5 shadow-lg w-48">
            
                <ul>
                    <h1 className="font-bold">
                        <li>
                            <Link to="/">
                            Home
                       </Link>
                       </li>

                    </h1>
                    <li>Shorts</li>
                    <li>Subscriptions</li>
                </ul>
                <ul> 
                    <div className="pt-5">
                    <li>Library</li>

                    </div>
                    
                    <li>History</li>
                    <li>Your Videos</li>
                    <li>Watch Later</li>
                    <li>Liked Videos</li>
                </ul>
            
        </div>
    )
};

export default Sidebar;