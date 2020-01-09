import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {

        return (
            <form onSubmit={this.onSubmit} className="item-add-form d-flex">
                <input value={this.state.label} onChange={this.onLabelChange} className="form-control" type="text" placeholder="What needs to be done" />
                <button className="btn btn-outline-secondary">Add</button>
            </form>
        );
    }
}
