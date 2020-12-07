import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Film from './Film.js';

class App extends Component {

  state = {
    data:  [],
    name: "Pacal",
    comics:["Dorohedoro", "The Maxx", "Incal"]
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cassetts/all')
      .then(response => response.json())
      .then(data =>  {
          console.log(data);
          this.setState({ data })
        }
      );
  }

  render(){
    return ( 
      <div className="App">
        <p>{this.state.data.map(film => <Film info ={film}/>)}</p>
      </div>
    );
  }

}
export default App;