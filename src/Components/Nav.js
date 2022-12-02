import '../App.css';
import React from "react";
import {Link} from "react-router-dom"


export default function Nav () {

    const styles = {
        color: 'White'
    }
    return (
        <nav>
            <h2>Logo</h2>
            <ul className="nav-links">
                <Link to="/about">
                    <li style={styles}>About</li>
                </Link>
                <Link to="/shop">
                    <li style={styles}>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}