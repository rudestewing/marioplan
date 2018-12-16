import React, { Component } from 'react'

// Component 
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
    render() {
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

export default Dashboard;