import React, { Component } from 'react'

// Package
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/project/create" className="nav-link active" >New Project</Link>
            </li>
            <li className="nav-item">
                <a href="#" className="btn btn-sm btn-danger" onClick={props.signOut}> Logout </a>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link" > Profile </Link>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            return dispatch(signOut())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);