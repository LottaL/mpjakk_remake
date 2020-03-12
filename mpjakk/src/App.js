import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CatTable from './Components/CatTable';

import axios from 'axios';

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
    /*fetch('test.json')
    .then(res => res.json())
    .then((res) => {
      this.setState({data: res});
      console.log(res);
    })*/
    fetch(this.state.url)
    .then(res => res.json())
    .then((res) => {
      console.log(res);

      Promise.all(res.map(item => {
        //console.log(item.file_id);
        return fetch(this.state.url + '/' + item.file_id).
            then(response => response.json())
      }))
      .then(items => {
        console.log(items);
        this.setState({data: items});
      });
    })
    .catch(err => console.log(err));
    
    /*let promises = [],
        array = [];
    axios.get('http://media.mw.metropolia.fi/wbma/media')
        .then(res => //this.setState({ picArray: res.data }))
        {
          //console.log(res.data);
          //console.log(res.data[0].file_id);
          res.data.map(a =>
              {
                let imgID = a.file_id;
                //console.log(`http://media.mw.metropolia.fi/wbma/media/${imgID}`);
                promises.push(axios.get(`http://media.mw.metropolia.fi/wbma/media/${imgID}`)
                    .then(res2 => array.push(res2))
                    .catch(err2 => console.log(err2))
                )
              }
          );
          Promise.all(promises).then(() => this.setState({ picArray: array}),
          //console.log(this.state.picArray)
        )
        }
        )
        .catch(err => console.log(err))*/
    
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        {this.state.data.map(i => <CatTable key={i.file_id} content={i}/>)}
      </header>
    </div>
    )
  };
}

export default App;
