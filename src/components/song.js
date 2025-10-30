import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, duration } = this.props;

    return (
      <div className="song">
        <h2>{title}</h2>
        <p>{artist}</p>
        <p>{duration}</p>
      </div>
    );
  }
}

export default Song;
