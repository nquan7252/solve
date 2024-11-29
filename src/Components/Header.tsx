import { Link } from "react-router-dom";
import React, { Component } from 'react';

function Header() {
    return <div className="header">
    <h1 className="ml-5"><Link to={'/'}>solve.</Link></h1>
    <nav>
        <Link to={'/'}>products</Link>
        <Link to={'/'}>about</Link>
    </nav>
  </div>;
}

export default Header;