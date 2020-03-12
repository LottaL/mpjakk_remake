import React, {Component} from 'react';

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
                    <img src={this.props.content.thumbnails.w160} alt={this.props.content.title} />
                </td>
                <td>
                    <h3>{this.props.content.title}</h3>
                    <p>{this.props.content.description}</p>
                </td>
                <td>
                    <a onClick={this.toggleModalComponent}>View</a>
        {/*<a href={this.props.content.filename}>View</a>*/}
                    {this.state.modalOpen && 
                        <Modal 
                        content={this.props.content} 
                        toggleModal={this.toggleModalComponent}/>
                    }
                </td> 
            </div>         
        )
    }
}