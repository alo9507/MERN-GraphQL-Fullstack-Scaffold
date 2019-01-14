import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import { Router, Route, Switch } from 'react-router-dom';
import Header from 'components/shared/Header';
import history from '../routes/history';
import Home from 'components/Home';
import Create from 'components/Create';
import '../../node_modules/css-reset-and-normalize/css/reset-and-normalize.min.css';
import '../style/css/style.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/create' component={Create} />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
