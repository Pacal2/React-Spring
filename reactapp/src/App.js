import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {

  state = {
    name: "Pacal"
  }

  

  render(){
    return ( 
      <div className="App">

        Hello {this.state.name}
      </div>
    );
  }

}
export default App;