import React, { Component } from 'react';
import PostView from './PostView';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <PostView />
        </div>
      </div>
    );
  }
}

export default Post;
