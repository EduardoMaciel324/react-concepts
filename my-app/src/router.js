import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Intro from "./introducing-jsx"
import Rendering from "./rendering-elements";
import {Welcome, Question, App, UserInfo} from "./components-and-props";
const comment = {
  author : {
    name: "Eduardo Maciel",
    avatar : "Dragon"
  },
  text : "Hello my name is Eduardo and i am beginner in React"
}
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
            <Rendering />
          </Route>
          <Route path="/3">
            <Welcome name="Eduardo Maciel" />
            <Question name="Eduardo Maciel" />
            <App></App>
            <UserInfo
              author = {comment.author}
              text = {comment.text}>
            </UserInfo>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.