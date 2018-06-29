import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from './Nav';
import Features from './Features';

class Main extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <ul>
          <Features />
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
