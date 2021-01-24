import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Intro from "./introducing-jsx"
export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul className="noListStyle">
          <li>
            <Link to="/1">Introducing</Link>
          </li>
          <li>
            <Link to="/2">Tick</Link>
          </li>
          <li>
            <Link to="/3">Props</Link>
          </li>
          <li>
            <Link to="/4">Lifecycle</Link>
          </li>
          <li>
            <Link to="/5">Events</Link>
          </li>
          <li>
            <Link to="/6">Conditional Rendering</Link>
          </li>
          <li>
            <Link to="/7">Lists and Keys</Link>
          </li>
          <li>
            <Link to="/8">Forms</Link>
          </li>
          <li>
            <Link to="/9">State Up</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/1">
            <Intro />
          </Route>
          <Route path="/2">
            <About />
          </Route>
          <Route path="/3">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
