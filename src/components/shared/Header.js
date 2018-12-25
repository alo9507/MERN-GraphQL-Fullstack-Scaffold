import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Brand</Link>
            <div className="right menu">
                <Link to="/create" className="item">Create</Link>
                <Link to="/create" className="item">Login</Link>
            </div>
        </div>
    );
};

export default Header;