import React from 'react';
import {Link} from 'react-router-dom';


const Homepage = props => {
    return (
        <div className="hero-container">
            <h1 className=''>Share your thoughts with no restriction!</h1>
            <h4>First time visiting?</h4>
            <Link to='/signup' className='btn btn-outline-danger'>Sign Up Now!!</Link>
        </div>
    )
}

export default Homepage;