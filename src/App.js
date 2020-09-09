import React from 'react';
import Navigation from './Components/Navigation';
import Section from './Components/Section';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Wysylka from './Components/Shipment';
import NotFound from './Components/NotFound';
import Instagram from './Components/Instagram';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HowBuy from './Components/HowBuy';

function App() {
  return (
    <Router>
      <div className="App">
        <Instagram />
        <Navigation />

        <Switch>
          <Route path="/" exact component={Section} />
          <Route path="/kontakt" exact component={Contact} />
          <Route path="/jakZamowic" exact component={HowBuy}></Route>
          <Route path="/wysylka" exact component={Wysylka}></Route>
          <Route path="/products" exact component={NotFound}></Route>
          <Route path="/products/:brand" component={Products}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//<Instagram />
//<Navigation />
