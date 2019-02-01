import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {value: this.props.value};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const { name } = this.props;
        return (
            <div className='form-group'>
            <label className="control-label mb10">{ name }</label>
            <input className="form-control" value={this.state.value} onChange={this.handleChange}/>
        </div>
        )
    }
}