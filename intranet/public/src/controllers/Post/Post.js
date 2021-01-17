import React, { Component } from 'react';
import PostView from './PostView';
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div>
        <PostView />
      </div>
    )
  }
}

export default Post;
