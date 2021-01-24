import React, { Component } from 'react';

import './reset.css';
import './App.css';

import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Form from './components/Form/Form';
import Resource from './components/Resource/Resource';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showForm: false,
    };
    this.getData = this.getData.bind(this);
    this.showForm = this.showForm.bind(this);
    this.addContent = this.addContent.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  showForm() {
    this.setState({
      showForm: this.state.showForm ? false : true,
    });
  }

  getData() {
    console.log('Pulling Data from API...');
    axios.get('http://localhost:3050/api/resources').then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  addContent(data) {
    axios.post('http://localhost:3050/api/resources', data).then((response) => {
      this.setState({
        showForm: false,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Header showForm={this.showForm} />
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <Post />
            </div>
            <div className="col-sm-4">
              <div className={this.state.showForm ? 'hidden' : ''}>
                <Resource data={this.state.data} />
              </div>

              <div className={this.state.showForm ? '' : 'hidden'}>
                <Form addContent={this.addContent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
