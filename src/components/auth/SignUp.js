import React, { Component } from 'react'

// Package
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
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
    }

    render() {
        const { auth } = this.props;

        if(auth.uid) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="auth">
                    <h5 className="title" > Create Account </h5>
                    <div className="form-group">
                        <label htmlFor="first-name"> First Name </label>
                        <input type="text" id="first_name" className="form-control" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last-name"> Last Name </label>
                        <input type="text" id="last_name" className="form-control" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Your Email Address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Secret Password" />
                    </div>
                    
                    <div className="row">
                        <button type="submit" style={{margin: 'auto'}} className="btn btn-md btn-primary" > Sign up  </button>
                    </div>

                    <div className="text">
                        <p> already have account ? </p>
                        <p> 
                            <Link to="/signin"> Sign in here </Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUp);