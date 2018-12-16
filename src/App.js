import React, { Component } from 'react'

//css
import './assets/bootstrap-4.1.3/dist/css/bootstrap.css'
import './assets/css/dist/main.css'

// Package
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, reduxFirebase } from 'react-redux-firebase';
import fbConfig from './config/firebase';
 

// Components
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetail'
import CreateProject from './components/projects/CreateProject'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reduxFirebase(fbConfig)
    )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}> 
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
            </Provider>
        )
    }
}

export default App;