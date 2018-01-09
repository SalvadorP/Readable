import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NoMatch from './NoMatch';
import PostPage from './PostPage';
import PostFormPage from './PostFormPage';
import MenuBar from './MenuBar';
import MainPage from './MainPage';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MenuBar />
          <br />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/:category/:id" component={PostPage} />
            <Route exact path="/:category/:id/edit" component={PostFormPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
