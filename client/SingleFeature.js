import React, {Component} from 'react';
import axios from 'axios';
import Voting from './Voting';

export default class SingleFeature extends Component {
  constructor () {
    super();
    this.state = {
      feature: {}
    }
  }
  async componentDidMount () {
    const res = await axios.get(`/api/features/${this.props.match.params.id}`);
    this.setState({feature: res.data});
  }
  render () {
    return (
      <div className='single-feature'>
          <h2>{this.state.feature.title}</h2>
          <a href={this.state.feature.siteURL}>Site</a>
          <Voting votes={this.state.feature.votes} />
          <img src={this.state.feature.imgURL} />
          <p>{this.state.feature.description}</p>
      </div>
    )
  }
}
