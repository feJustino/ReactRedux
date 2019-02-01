import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { list }=this.props;
        return (
            <select className="form-control select-subtitle">>
                    {list.map((item) => (
                        <option key={item.id} >{item.title}</option>
                    ))}
            </select>
        )
    }
}