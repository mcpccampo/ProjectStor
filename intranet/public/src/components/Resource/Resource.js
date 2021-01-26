import React, { Component } from 'react';
import ResourceView from './ResourceView';
import Form from './Form';
import axios from 'axios';

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.deleteData = this.deleteData.bind(this);
    this.addContent = this.addContent.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('http://localhost:3050/api/resources').then((res) => {
        this.setState({
          data: [...res.data],
        });
      });
    }, 1000);
  }

  addContent(data) {
    console.log('Adding contect to API...');
    axios.post('http://localhost:3050/api/resources', data).then((res) => {
      this.setState({
        data: [...res.data],
      });
    });
  }

  loadForm(data) {}

  updateContent(data) {
    console.log('Updating Content in API...');
    console.log('data ....', data);
  }

  deleteData(id) {
    console.log('Sending Delete Command to API...');
    axios.delete(`http://localhost:3050/api/resources/${id}`).then((res) => {
      this.setState({
        data: [...res.data],
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={this.props.showForm ? 'form-container' : 'hidden'}>
            <Form 
              addContent={this.addContent} 
              showForm={this.props.showForm} 
            />
          </div>
          <div className="resource-container">
            <ResourceView
              resourceData={this.state.data}
              resourceDelete={this.deleteData}
              resourceUpdate={this.updateContent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Resource;
