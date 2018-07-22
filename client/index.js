import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Main from './main';
import FeaturesContainer from './FeaturesContainer';
import AddForm from './AddForm';
import {About} from './About';
import Login from './Login';
import SingleFeature from './SingleFeature';

export default class App extends Component {
  render () {
    return (
        <Router>
          <div>
            <Main />
            <Switch>
            <Route exact path='/' component={FeaturesContainer} />
            <Route exact path='/add' component={AddForm} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/features/:id' component={SingleFeature} />
            <Redirect to='/' />
            </Switch>
          </div>
        </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
