import React from 'react';
import {Voting} from './Voting';

export default class Features extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feature: this.props.feature
    }
  }

  render() {
    return (
      <div key ={this.props.feature.id}>
        <h2>{this.props.feature.title}</h2>
        <p>{this.props.feature.description}</p>
        <img src={this.props.feature.imgURL} />
        <a href={this.props.feature.siteURL}>Site</a>
        <Voting votes={this.props.feature.votes} />
      </div>
    )
  }
}
