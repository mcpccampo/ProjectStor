import React, { Component } from 'react';
import ResourceView from './ResourceView';
import axios from 'axios';

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: [...this.props.data],
    });
  }

  deleteData(id) {
    console.log('Sending Delete Command to API...');
    axios.delete(`http://localhost:3050/api/resources/${id}`).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <ResourceView resourceData={this.state.data} resourceDelete={this.deleteData} />
      </div>
    );
  }
}

export default Resource;
