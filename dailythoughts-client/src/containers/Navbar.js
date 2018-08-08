import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header"></div>
                    <ul className="navbar-menu navbar-right">
                        <li className="menu-item"></li>
                    </ul>
                </div>
            </nav>
        )
    }
}