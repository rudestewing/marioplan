import React, { Component } from 'react';

import { connect } from 'react-redux'
import { compose } from 'redux';

import { firestoreConnect } from 'react-redux-firebase';

import { Link } from 'react-router-dom';

// Components
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) => {
    const { projects } = props;

    console.log(projects);
    return (
        <div className="project-list">
                {
                    projects ? (
                        projects.map((item) => {
                            return (
                                <Link to={'/project/'+item.id} key={item.id}>
                                    <ProjectSummary  project={item} />
                                </Link>
                            )
                        })
                    ) : (
                        <p> No Projects ! @_@ </p>
                    )
                }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectList)