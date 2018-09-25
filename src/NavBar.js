import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">DND Character Database</Link>
                    <Link to="/About">About</Link>
                </nav>
            </div>
        )
    }
}

export default NavBar
