import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import CardDetails from "./components/flash cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={CardDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
