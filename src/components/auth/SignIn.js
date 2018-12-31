import React, { Component } from 'react'

// Package
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        var field = e.target.id;
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="auth">
                    <h5 className="title" > Sign in </h5>
                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" value={this.state.email} className="form-control" onChange={this.handleChange} placeholder="Your Email Address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" value={this.state.password} className="form-control" onChange={this.handleChange} placeholder="Secret Password" />
                    </div>
                    
                    <div className="row">
                        <button type="submit" style={{margin: 'auto'}} className="btn btn-md btn-primary" > Login </button>
                    </div>
                    <div className="text">
                        <p> doesn't have account ? </p>
                        <p> 
                            <Link to="/signup"> register now ! </Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return { 
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => {
            return dispatch(signIn(credentials));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)