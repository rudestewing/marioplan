import React, { Component } from 'react'


const ProjectDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    card title detail project | project_id : {id}
                </h5>
                <p className="card-text">
                    this is card text detail 
                </p>
                <p className="card-text"><small> posted by: ninja </small></p>
            </div>
        </div>
    )
}

export default ProjectDetail;