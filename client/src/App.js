import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    players: []

  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({
        players: res.data
      })
      console.log(res)
    })
    .catch(err => console.log(err))
  }

render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Womens Worl Cup</h1>
        <p>name: "Alex Morgan", country: "United States", searches: 100, id: 0</p>
        <p>Complete Players List Components</p>
        <p>Import Players List</p>
        <p>Complete Players Card</p>
        <p>Import Players Card to PlayersList</p>
      </header>
    </div>
  );

}
  
}

export default App;
