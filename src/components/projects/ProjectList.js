import React, { Component } from 'react';

// Components
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
        <div className="project-list">

            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            
        </div>
    )
}

export default ProjectList;