import React, { Component } from 'react';

// Component 
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';


import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { auth } from 'firebase';

class Dashboard extends Component {
    render() {
        const { auth } = this.props;

        if(!auth.uid) {   
            return <Redirect to='/signin' />
        }   
        return (
            <div className=" container dashboard">
                <div className="row">
                    <div className="col-md-8">
                        <ProjectList />
                    </div>
                    <div className="col-md-4">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
} 


export default connect(mapStateToProps)(Dashboard);