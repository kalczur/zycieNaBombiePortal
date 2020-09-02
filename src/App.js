import React from 'react';
import Navigation from './Components/Navigation'
import Section from './Components/Section'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Section />
      </div>
    </Router>
  );
}

export default App;
