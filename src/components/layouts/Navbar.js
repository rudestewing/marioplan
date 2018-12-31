import React, { Component } from 'react'

// Package
import { Link } from 'react-router-dom'

// Components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import { connect } from 'react-redux';

// Assets 
import logo from '../../assets/images/firebase.png'

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <div className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img className="logo" src={logo} alt=""/>
                <span><strong> MarioPlan </strong></span>
            </Link>
            {links}
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStatetoProps)(Navbar);