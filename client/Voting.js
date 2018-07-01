import React from 'react';

export default class Voting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: props.votes,
    }
  }

  // handleClick() {
  // }

  render() {
    return (
      <div>
        <button className='voting-btn'> 👌 {this.state.votes}</button>
      </div>
    );
  }
}
