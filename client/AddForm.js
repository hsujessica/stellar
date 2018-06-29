import React from 'react';
import {Nav} from './Nav';

class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Nav />
        <form>
          <label htmlFor='title'>Title</label>
          <input type ='text' name='title' />
          <label htmlFor='description'>Description</label>
          <input type ='textarea' name='description' />
          <label htmlFor='image'>Add Image</label>
          <input type ='text' />
          <label htmlFor='site'>Site</label>
          <input type ='text' />
        </form>
      </div>
    )
  }
}
