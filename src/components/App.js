import '../styles/App.css';

import React from 'react';

import CreateLink from './CreateLink';
import LinkListPage from './LinkListPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <LinkListPage />
        <CreateLink />
      </div>
    );
  }
}

export default App;
