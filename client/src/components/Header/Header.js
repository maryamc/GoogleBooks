import React from 'react';
import "./header.css";

function Header() {
    return (
        <div className= "jumbotron headerJumb" style={{backgroundColor: "rgb(229, 197, 255)"}}>
            <div className="container" id="pageTitle">
                <h1>
                    Google Books
                </h1>
            </div>
        </div>
    )
}

export default Header
