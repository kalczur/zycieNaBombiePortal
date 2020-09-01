import React from 'react';
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
