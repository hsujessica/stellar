import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => (
  <div>
    <ul className='nav'>
      <span className='nav-left'>
        <li><Link to='/'><h1>Stellar</h1></Link></li>
      </span>
      <span className='nav-right'>
        <li><Link to='/add'>Add</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </span>
    </ul>
  </div>
)

export default Main;
