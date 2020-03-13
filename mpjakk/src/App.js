import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

import CatTable from './Components/CatTable';
import Nav from './Components/Nav';
import { Home } from './views/Home';
import { Profile } from './views/Profile';
import Single from './views/Single';

import axios from 'axios';
import {getAllMedia} from './utils/MediaAPI';


const picArray = [
  {
    'title': 'Title 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {

    'title': 'Title 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'title': 'Title 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://media.mw.metropolia.fi/wbma/media'
    }
  }

  componentDidMount() {
    getAllMedia().then(res => this.setState({data: res}));
  }
//basename='/~lottalau/mpjakk'
  render() {
    return (
      <Router basename='/~lottalau/mpjakk/http-router'>
        <div className="App">
          <header className="App-header">
            <Nav/>
            <Route exact path="/" render={(props) => (
                    <Home {...props} data={this.state.data}/>
                )}/>
            <Route exact path="/profile" render={(props) => (
                    <Profile {...props} data={this.state.data}/>
                )}/>
            <Route exact path="/single" render={(props) => (
                    <Single {...props} data={this.state.data}/>
                )}/>
          </header>
        </div>
      </Router>
    )
  };
}

export default App;
