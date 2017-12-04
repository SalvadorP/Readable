import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NoMatch from './NoMatch';
import MainPage from './MainPage';
// import logo from './logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-xs-12">
          <Switch>
            <Route exact path="/" render={() => (
              <MainPage />
            )} />
            
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
