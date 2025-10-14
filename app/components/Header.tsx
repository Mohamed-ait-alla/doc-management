import React from "react";


const Header = () => {
    return (
        <div className="header-container">
            <h3>DocManager</h3>
            <nav>
                <a href="#">Documents</a>
                <a href="#">Add New Document</a>
            </nav>
        </div>
    );
};

export default Header;