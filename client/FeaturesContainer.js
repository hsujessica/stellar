import React from 'react';
import axios from 'axios';
import FeaturePreview from './FeaturePreview';

export default class FeaturesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      features: []
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/features');
    this.setState({features: res.data});
  }

  render() {
    return (
      <div>
        {this.state.features.map(feature => (
        <FeaturePreview key={feature.id} feature={feature} />
        ))}
      </div>
    );
  }
}
