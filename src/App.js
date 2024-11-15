// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
