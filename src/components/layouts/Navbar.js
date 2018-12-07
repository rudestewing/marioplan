import React, { Component } from 'react'

// Package
import { Link } from 'react-router-dom'

// Components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

// Assets 
import logo from '../../assets/images/firebase.png'

const Navbar = () => {
    return (
        <div className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img className="logo" src={logo} alt=""/>
                <span><strong> MarioPlan </strong></span>
            </Link>

            <SignedInLinks />
            <SignedOutLinks />

        </div>
    )
}

export default Navbar;