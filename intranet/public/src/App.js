import React, { Component } from 'react';

import './reset.css';
import './App.css';

import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Form from './components/Form/Form';
import Resource from './components/Resource/Resource';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      resources: [],
      posts: [],
      showForm: false,
    };
    this.showForm = this.showForm.bind(this);
    this.addContent = this.addContent.bind(this);
  }

  showForm() {
    this.setState({
      showForm: this.state.showForm ? false : true,
    });
  }

  addContent() {
    // name,group,url
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
                <Resource />
              </div>

              <div className={this.state.showForm ? '' : 'hidden'}>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
