import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login'
import Navbar from './components/Navbar'
import Signup from './containers/Signup'
import Dashboard from './containers/Dashboard'
import { Grid } from 'semantic-ui-react'
import './App.css'
import InTheaters from './containers/InTheaters'
import MovieShow from './components/MovieShow'
import OnAir from './containers/OnAir'
import SeriesShow from './components/SeriesShow'
import CreateReview from './containers/CreateReview'
import Friends from './containers/Friends'
import Profile from './containers/Profile'
import EditProfile from './containers/EditProfile'

function App() {
  
  return (
    <BrowserRouter>
      <Grid>
        <Grid.Row style={{ marginBottom: '4em'}}>
          <Navbar />
        </Grid.Row>
        <Grid.Row >
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />>
            <Route path='/signup' component={Signup} />
            <Route path='/home' component={Dashboard} />
            <Route exact path='/movies' component={InTheaters} />
            <Route path='/movies/:id' component={MovieShow} />
            <Route exact path='/series' component={OnAir} />
            <Route path='/series/:id' component={SeriesShow} />
            <Route path='/reviews/:medium/:id/new' component={CreateReview} />
            <Route exact path='/friends' component={Friends} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route path='/reviews/:id/edit' component={CreateReview} />
            <Route path='/profile/:id/edit' component={EditProfile} />
          </Switch>
        </Grid.Row>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
