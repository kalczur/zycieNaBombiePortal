import React from 'react';
import Navigation from './Components/Navigation'
import Section from './Components/Section'
import Instagram from './Components/Instagram'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Instagram />
        <Navigation />
        <Section />
      </div>
    </Router>
  );
}

export default App;
