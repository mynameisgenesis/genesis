import React from "react";

export const NavLogo = () => {
    return(
        <div className="nav-logo">
            Genesis
        </div>
    );
};

const Navigation = () => {
    return(
        <nav>
            <NavLogo />
            <div className="nav-links">
                <a href="">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
};

export default Navigation;