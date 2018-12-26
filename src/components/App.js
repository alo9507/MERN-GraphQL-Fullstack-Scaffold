import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from 'components/shared/Header';
import history from '../routes/history';
import Home from 'components/Home';
import Create from 'components/Create';

import '../style/style.css';

class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/create' component={Create} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
