import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Site from './Stie';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/site" element={<Site />} />
        </Routes>
      </Fragment>
    );
  }
}

export default App;