import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home/home";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import TodoDetail from "./TodoDetail/todo-detail";
import page404 from "./errors/page404";
import "bootstrap/dist/css/bootstrap.min.css";

// routing
let router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todo-detail" component={TodoDetail} />
      <Route path="*" component={page404} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <>
      <div className="container-fluid">{router}</div>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
