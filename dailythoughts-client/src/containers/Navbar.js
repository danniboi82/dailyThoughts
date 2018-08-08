import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../images/squirrel.png';
class Navbar extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="" width='55px'/>
                    </Link>
                    <div className="navbar-nav nav-menu ml-auto">
                        <Link to='/signup' className="nav-item">Sign-up</Link>
                        <Link to='/signin' className="nav-item">Sign-in</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, null)(Navbar);