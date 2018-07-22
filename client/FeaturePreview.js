import React from 'react';
import {Link} from 'react-router-dom';
import Voting from './Voting';

export default class FeaturePreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feature: this.props.feature
    }
  }

  render() {
    return (
      <div key ={this.state.feature.id} className='feature-preview'>
        <div className='feature-left'>
          <h2>{this.state.feature.title}</h2>
          <Voting votes={this.state.feature.votes} />
          <Link to={`/features/${this.state.feature.id}`}>
          <p>{this.state.feature.description}</p>
          </Link>
        </div>
        <div className='feature-right'>
          <a href={this.state.feature.siteURL}>Site</a>
          <img className='preview-img' src={this.state.feature.imgURL} />
        </div>
      </div>
    );
  }
}
