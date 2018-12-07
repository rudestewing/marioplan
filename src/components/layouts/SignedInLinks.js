import React, { Component } from 'react'

// Package
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/project/create" className="nav-link active" >New Project</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link" >Logout</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link" > Profile </Link>
            </li>
        </ul>
    )
}

export default SignedInLinks;