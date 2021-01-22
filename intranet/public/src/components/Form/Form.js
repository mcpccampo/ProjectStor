import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      group: '',
      url: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="form_component">
        <label>
          Title:
          <input
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          ></input>
        </label>
        <br />

        <label>
          Group:
          <select name="group" value={this.state.group} onChange={(e) => this.handleChange(e)}>
            <option>- Select -</option>
            <option>Resources</option>
            <option>Post</option>
          </select>
        </label>
        <br />

        <label>
          URL:
          <input
            name="url"
            value={this.state.url}
            onChange={(e) => this.handleChange(e)}
          ></input>
        </label>
        <br />
        <br />

        <input type="submit" value="submit" />
      </div>
    );
  }
}

export default Form;
