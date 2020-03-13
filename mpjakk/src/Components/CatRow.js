import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';

export default class CatRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.toggleModalComponent = this.toggleModalComponent.bind(this);
    }

    toggleModalComponent() {
        this.setState({modalOpen: !this.state.modalOpen});

    }

    render() {
        return (
            <div className="CatRow">
                <td>
                    <img src={this.props.content.thumbnails ?
                         'http://media.mw.metropolia.fi/wbma/uploads/' + this.props.content.thumbnails.w160 : ''} 
                         alt={this.props.content.title} />
                </td>
                <td>
                    <h3>{this.props.content.title}</h3>
                    <p>{this.props.content.description}</p>
                </td>
                <td>
                    <Link to={{pathname: '/single', file_id: this.props.content.file_id}}>View</Link>
                </td> 
            </div>         
        )
    }
}