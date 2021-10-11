import React, { Suspense, lazy } from 'react';
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import NotFound404Page from './components/NotFound404Page'

import {
  HashRouter  as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Grid } from '@material-ui/core';


const Menu = lazy(() => import('./components/menu/Menu' ));
const Login = lazy(() => import( './components/auth/Login'));


function App() {
  return (
    <Router >
      <Header/>
      <Suspense fallback={ <Grid></Grid>}>
        <Switch>    
        <Route path = "/" exact component={ Login } />
          <PrivateRoute path = "/menu" exact component={ Menu} />
        <Route path = "*" component={NotFound404Page} />
        </Switch>
      </Suspense>
    </Router>);
  }
  
  export default App;
