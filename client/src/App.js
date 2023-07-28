import React from 'react';
import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About'
import Contact from './containers/Contact';
import Member from './containers/member/Member';
import NotFound from './containers/error/NotFound';
import MemberEdit from "./containers/member/MemberEdit";

class App extends Component {

  renderRouter() {
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/members" component={Member}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/members/add" component={MemberEdit}/>
        <Route exact path="/members/edit/:id" component={MemberEdit}/>
      <Route component={NotFound} />
      </Switch>
    )
  }

  render () {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
