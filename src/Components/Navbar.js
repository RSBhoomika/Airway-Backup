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
            <Link to='/booking' style={mystyle} >  Home </Link>
            <Link style={mystyle}> History </Link>
            <Link to='/Points' style={mystyle}> Points </Link>
            <Link to='/Account' style={mystyle}>  Account </Link>
        </>
    )
};

export default Navbar;