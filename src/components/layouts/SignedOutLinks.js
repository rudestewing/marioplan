import React, { Component } from 'react'

// Package
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/signup" className="nav-link active" > Create an Account.. </Link>
            </li>
            <li className="nav-item" >
                <Link to="/signin" className="nav-link btn btn-sm btn-primary" > Sign in </Link>
            </li>
        </ul>
    )
}

export default SignedOutLinks;