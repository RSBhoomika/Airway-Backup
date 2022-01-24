import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const mystyle = {
        color: "black",
        padding: "10px",
        textDecoration: 'none'
    };
    return (
        <>
            <Link to='/Info' style={mystyle} >  Home </Link>
            <Link style={mystyle}> History </Link>
            <Link style={mystyle}> Points </Link>
            <Link to='/FAQ' style={mystyle}>  Account </Link>
        </>
    )
};

export default Navbar;