import React from 'react';
import Voting from './Voting';

export default class SingleFeature extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feature: this.props.feature
    }
  }

  render() {
    return (
      <div key ={this.state.feature.id} className='single-feature'>
        <h2>{this.state.feature.title}</h2>
        <p>{this.state.feature.description}</p>
        <img src={this.state.feature.imgURL} />
        <a href={this.state.feature.siteURL}>Site</a>
        <Voting votes={this.state.feature.votes} />
      </div>
    );
  }
}
