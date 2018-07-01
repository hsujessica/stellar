import React from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import Features from './Features';
import AddForm from './AddForm';
import {About} from './About';
import Login from './Login';

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <ul>
          <li><Link to='/'><h1>Stellar</h1></Link></li>
          <li><Link to='/add'>Add</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>

        <Switch>
          <Route exact path='/add' component={AddForm} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Features} />
          <Redirect to='/' />
        </Switch>

          <ul>
            <Features />
          </ul>

        </div>
      </Router>
    )
  }
}
