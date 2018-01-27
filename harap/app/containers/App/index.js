/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderComponent from '../../components/HeaderComponent/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import DiscoverPage from 'containers/DiscoverPage/Loadable';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Container } from 'semantic-ui-react'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Login />}/>
        <Route exact path="/home" render={() => <div><HeaderComponent /><Container><HomePage /></Container></div>}/>
        <Route exact path="/discover" render={() => <div><HeaderComponent /><Container><DiscoverPage /></Container></div>}/>
        <Route component={NotFoundPage} />

      </Switch>
    </div>
  );
}
