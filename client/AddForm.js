import React from 'react';
import axios from 'axios';

export default class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      submission: {
        title: '',
        description: '',
        imageURL: '',
        siteURL: '',
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
    const submission = this.state.submission;
    this.setState({
      loading: true
    });
    await axios.post('/api/', this.state.submission);
    this.setState = {
      submission: {
        title: '',
        description: '',
        imageURL: '',
        siteURL: '',
      },
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='add-feature-form'>
          <label htmlFor='title'>Title</label>
            <input type ='text' name='title' onChange={this.handleChange} />
          <label htmlFor='description'>Description</label>
            <input type ='textarea' name='description' onChange={this.handleChange} />
          <label htmlFor='image'>Add Image</label>
            <input type ='text' name='imageURL' onChange={this.handleChange} />
          <label htmlFor='site'>Site</label>
            <input type ='text' name='siteURL' onChange={this.handleChange} />
          <button type='submit' name='submit' disabled={this.state.loading}>{this.state.loading ? '...' : 'Submit'}</button>
        </form>
      </div>
    )
  }
}
