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
      showForm: false,
    };
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    this.setState({
      showForm: this.state.showForm ? false : true,
    });
  }

  render() {
    return (
      <div className="app">
        <Header showForm={this.showForm} />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Post />
            </div>
            <div className="col-sm-6">
              <Resource showForm={this.state.showForm} deleteData={this.deleteData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
