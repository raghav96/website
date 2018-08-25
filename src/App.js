import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import MenuBar from "./Components/MenuBar/MenuBar";
import Footer from "./Components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
          <MenuBar/>
          <Home/>
          <Footer/>
      </div>
    );
  }
}

export default App;
