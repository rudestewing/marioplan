import React, { Component } from 'react'

//css
import './assets/bootstrap-4.1.3/dist/css/bootstrap.css'
import './assets/css/dist/main.css'

// Package
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// Components
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetail'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <div className="app">
                    <Navbar />
                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/signin" component={SignIn} />
                            <Route exact path="/signup" component={SignUp} />

                            <Route exact path="/project/create" component={CreateProject} />
                            <Route exact path="/project/:id" component={ProjectDetail} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;