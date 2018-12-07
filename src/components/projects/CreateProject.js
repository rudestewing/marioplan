import React, { Component } from 'react'

class CreateProject extends Component {
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

export default CreateProject