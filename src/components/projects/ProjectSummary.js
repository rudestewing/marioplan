import React, { Component } from 'react'

const ProjectSummary = (props) => {
    const { project } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {project.title}
                </h5>
                <p className="card-text">
                    {project.content}
                </p>
                <p className="card-text"><small> posted by: ninja </small></p>
            </div>
        </div>
    )
}

export default ProjectSummary;