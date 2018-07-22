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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = this.state;
    newState.submission[event.target.name] = event.target.value;
    this.setState(newState);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const submission = this.state.submission;
    this.setState({
      loading: true
    });
    await axios.post('/api/features', submission);
    this.setState = {
      submission: {
        title: '',
        description: '',
        imageURL: '',
        siteURL: '',
      },
      loading: false,
    };
    this.props.history.push('/features');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='add-feature-form'>
          <div className='form-item'>
            <label htmlFor='title'>Title </label>
            <input type ='text' name='title' onChange={this.handleChange} className='form-input' />
          </div>
          <div className='form-item'>
            <label htmlFor='description'>Description </label>
            <textarea name='description' rows='10' onChange={this.handleChange} className='form-input' />
          </div>
          <div className='form-item'>
            <label htmlFor='image'>Add Image </label>
            <input type ='text' name='imageURL' onChange={this.handleChange} className='form-input' />
          </div>
          <div className='form-item'>
            <label htmlFor='site'>Site </label>
            <input type ='text' name='siteURL' onChange={this.handleChange} className='form-input' />
            </div>
          <div className='form-item'>
            <button type='submit' name='submit' disabled={this.state.loading} className='btn' >{this.state.loading ? '...' : 'Submit'}</button>
          </div>
        </form>
      </div>
    )
  }
}
