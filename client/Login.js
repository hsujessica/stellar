import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: '',
      },
      loading: false,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const user = this.state.user;
    this.setState({
      loading: true
    });
    // await axios
    this.state = {
      user: {
        username: '',
        password: '',
      },
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <label htmlFor='user'>User</label>
            <input type ='text' name='user' onChange={this.handleChange} />
          <label htmlFor='password'>Password</label>
            <input type ='text' name='password' onChange={this.handleChange} />
          <button type='submit' name='submit' disabled={this.state.loading}>{this.state.loading ? '...' : 'Submit'}</button>
        </form>
      </div>
    )
  }
}
