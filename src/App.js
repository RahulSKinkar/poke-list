import React from 'react'
import { HashRouter, Route, Switch, } from 'react-router-dom'

import { Header, Footer } from './components'
import { GalleryPage, DetailsPage } from './containers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <HashRouter>
      <Header />
      <div className='page-content'>
        <Switch>
          <Route
            component={GalleryPage}
            exact
            path='/'
          />
          <Route
            component={DetailsPage}
            path='/details/:id'
          />
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
