import '../styles/App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateLink from './CreateLink';
import Header from './Header';
import LinkListPage from './LinkListPage';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkListPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
