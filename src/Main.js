import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Main extends Component {
    render() {
      return (
        
        <HashRouter>
          
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">React Demo</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
       <li class="nav-link"><NavLink exact to="/">Home</NavLink></li>
       <li class="nav-link"><NavLink to="/stuff">About</NavLink></li>
       <li class="nav-link"><NavLink to="/contact">Contact</NavLink></li>    
    </ul>
  </div>
</nav>


<div className="content">
            <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>          
        </HashRouter>
      );
    }
  }
 
export default Main;