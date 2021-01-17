import React, { Component } from 'react';

import './reset.css';
import './App.css';

import Header from './controllers/Header/Header';
import Post from './controllers/Post/Post';
import Form from './controllers/Form/Form';
import Resource from './controllers/Resource/Resource';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
      posts: [],
      showForm: false,
    };
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    console.log('event triggered');
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
            <div className="col-sm-8">
              <Post />
            </div>
            <div className="col-sm-4">
              <div className={this.state.showForm ? 'd-none' : ''}>
                <Resource />
              </div>

              <div className={this.state.showForm ? '' : 'd-none'}>
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
