import React from 'react';
import SingleFeature from './SingleFeature';
import axios from 'axios';

const features = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    siteURL: '#',
    votes: 500,
    imageURL: '',
  },
  {
    id: 2,
    title: 'Another Title',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur',
    siteURL: '#',
    votes: 346,
    imageURL: '',
  },
  {
    id: 3,
    title: 'Titles are Cool',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    siteURL: '#',
    votes: 521,
    imageURL: '',
  },
  {
    id: 4,
    title: 'Wow Product',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    siteURL: '#',
    votes: 398,
    imageURL: '',
  },
];

export default class Features extends React.Component {
  constructor() {
    super();
    this.state = {
      features: features
    };
  }

  async componentDidMount() {
    // const res = await axios.get('/api/');
    // this.setState({features: res.data});
  }

  render() {
    return (
      <div>
        {this.state.features.map(feature => (
        <SingleFeature feature={feature} />
        ))}
      </div>
    );
  }
}
