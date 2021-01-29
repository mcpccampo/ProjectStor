import React, { Component } from 'react';

import './reset.css';
import './App.css';

import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Resource from './components/Resource/Resource';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResourceForm: false,
      showPostForm: false,
    };
    this.showResourceForm = this.showResourceForm.bind(this);
    this.showPostForm = this.showPostForm.bind(this);
  }

  showResourceForm() {
    this.setState({
      showResourceForm: this.state.showResourceForm ? false : true,
    });
  }

  showPostForm() {
    this.setState({
      showPostForm: this.state.showPostForm ? false : true,
    });
  }

  render() {
    return (
      <div className="app">
        <Header showResourceForm={this.showResourceForm} showPostForm={this.showPostForm} />
        <div className="container">
          <Resource showForm={this.state.showResourceForm} />
          <Post showForm={this.state.showPostForm} />
        </div>
      </div>
    );
  }
}

export default App;
