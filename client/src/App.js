import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import axios from 'axios';
import PlayersList from './components/PlayersList';

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
        <p>Complete LocalStorage, Dardmode, NavBar and use DarkMode NavBar</p>
        <p>Import NavBar</p>
        <Navbar/>
        <PlayersList players={this.state.players}/>
      </header>
    </div>
  );

}
  
}

export default App;
