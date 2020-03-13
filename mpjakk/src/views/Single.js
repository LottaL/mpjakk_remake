import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getSingleMedia} from '../utils/MediaAPI';
   
export default class Single extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        file: {
            filename: 'b39f699f211eaf63c435aa241d2384f2.jpg',
            title: 'Test',
        },
        mediaUrl: 'http://media.mw.metropolia.fi/wbma/uploads/'
        };   
    }
   
    componentDidMount() {
      getSingleMedia(this.props.location.file_id).then(res => this.setState({file: res}));
    }

    render() {
       return (
           <React.Fragment>
             <h1>{this.state.file.title}</h1>
             <img src={this.state.mediaUrl + this.state.file.filename} alt={this.state.file.title}/>
           </React.Fragment>
       );
     }   
   }
   
   Single.propTypes = {
     match: PropTypes.object,
   };

