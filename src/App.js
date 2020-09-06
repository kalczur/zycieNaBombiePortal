import React from "react";
import Navigation from "./Components/Navigation";
import Section from "./Components/Section";
import Contact from "./Components/Contact";
import Instagram from "./Components/Instagram";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HowBuy from "./Components/HowBuy";

function App() {
    return (
        <Router>
            <div className="App">
                <Instagram />
                <Navigation />

                <Switch>
                    <Route path="/" exact component={Section} />
                    <Route path="/kontakt" exact component={Contact} />
                    <Route path='/jakZamowic' exact component={HowBuy}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

//<Instagram />
//<Navigation />
