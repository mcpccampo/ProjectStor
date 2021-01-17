import React, { Component } from 'react';
import ResourceView from './ResourceView'

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div>
        <ResourceView />
      </div>
    );
  }
}

export default Resource;
