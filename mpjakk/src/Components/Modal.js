import React, {Component} from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Modal">
                <button onClick={this.props.toggleModal}>x</button>
                <img src={'http://media.mw.metropolia.fi/wbma/uploads/' + this.props.content.filename} alt={this.props.content.title}/>
            </div>
        )
    }
}