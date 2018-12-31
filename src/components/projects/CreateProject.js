import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'

//actions
import { createProject } from '../../redux/actions/projectActions'


class CreateProject extends Component {
    componentDidMount() {
        
        console.log('hi');
        
    }

    state = {
        title: '',
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.setState({
            title: '',
            'content': '',
        })
    }
    render() {
        return (
            <div id="create-project">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor=""> Title </label>
                        <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Title </label>
                        <textarea id="content" cols="30" rows="10" className="form-control" value={this.state.content} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit"> Submit Project ! </button>
                    </div>                    
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(
            createProject(project)
        )
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)