import React, { Component } from 'react'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetail = (props) => {
    const id = props.match.params.id;
    console.log(props.project);
    const { project } = props;

    if (project) {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        ID : {id}
                    </h5>
                    <p className="card-text">
                        <strong>
                            { props.project.title}
                        </strong>
                        <br/>
                        <p>
                            {props.project.content}
                        </p>
                    </p>
                    <p className="card-text">
                    </p>
                    <p className="card-text"><small> posted by: ninja </small></p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <p> loading project ... </p>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetail);