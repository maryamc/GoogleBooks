import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-dark">
                <div className="container" id="navContainer">
                    <Link className="navbar-brand" to="/"> Google Books </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/search">
                                Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/saved">
                                Saved
                            </Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
