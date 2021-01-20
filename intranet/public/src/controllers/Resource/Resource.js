import React, { Component } from 'react';
import ResourceView from './ResourceView';
import axios from 'axios';

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://localhost:3050/api/resources').then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <ResourceView resourceData={this.state.data} />
      </div>
    );
  }
}

export default Resource;
