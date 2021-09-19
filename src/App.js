
import React from 'react'
import { HashRouter, Route, Switch, } from 'react-router-dom'

import { Header, Footer } from './components'
import { GalleryPage, DetailsPage } from './containers'

import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route
          component={GalleryPage}
          exact
          path='/'
        />        
        <Route
          component={DetailsPage}
          path='/details'
        />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
