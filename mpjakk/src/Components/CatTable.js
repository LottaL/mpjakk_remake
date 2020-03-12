import React, {Component} from 'react';

import CatRow from './CatRow';

export default class CatTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="CatTable">
                <CatRow content={this.props.content}/>
            </div>
        )
    }
}