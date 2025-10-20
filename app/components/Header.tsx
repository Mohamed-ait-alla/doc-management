import Link from "next/link";
import React from "react";


const Header = () => {
    return (
        <div className="header-container">
            <h3>DocManager</h3>
            <nav>
                <ul>
                    <li><Link href="/documents">Documents</Link></li>
                    <li><Link href="/add-document">Add New Document</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;