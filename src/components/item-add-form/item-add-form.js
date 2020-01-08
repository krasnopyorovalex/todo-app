import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    render() {

        const {onItemAdded} = this.props;

        return (
            <div className="item-add-form">
                <button onClick={() => onItemAdded('Hello World')} className="btn btn-outline-secondary">Add Item</button>
            </div>
        );
    }
}
