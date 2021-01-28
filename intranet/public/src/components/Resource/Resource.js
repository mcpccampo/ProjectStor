import React, { Component } from 'react';
import ResourceView from './ResourceView';
import axios from 'axios';

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: '',
      title: '',
      group: '',
      url: '',
    };
    this.readContent = this.readContent.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.addContent = this.addContent.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.selectedData = this.selectedData.bind(this);
  }

  componentDidMount() {
    this.readContent();
  }

  readContent() {
    console.log('Reading data from API');
    axios.get('http://localhost:3050/api/resources').then((res) => {
      this.setState({
        data: [...res.data],
      });
    });
  }

  addContent(data) {
    console.log('Adding contect to API...');
    axios.post('http://localhost:3050/api/resources', data).then((res) => {
      this.setState({
        data: [...res.data],
      });
    });
  }

  updateContent(event) {
    event.preventDefault();
    console.log('Updating content...');
    const { id, title, group, url } = this.state;
    if (this.state.id !== '') {
      axios
        .post(`http://localhost:3050/api/resources/${id}`, { title, group, url })
        .then((res) => {
          this.setState({
            data: [...res.data],
          });
        });
    }
    this.setState({
      id: '',
      title: '',
      group: '',
      url: '',
    });
  }

  deleteData(id) {
    console.log('Sending Delete Command to API...');
    axios.delete(`http://localhost:3050/api/resources/${id}`).then((res) => {
      this.setState({
        data: [...res.data],
      });
    });
  }

  // form controls

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.addContent(this.state);
    this.setState({
      title: '',
      group: '',
      url: '',
    });
  }

  selectedData(data) {
    console.log('Selected Data for Form...', data);
    this.setState({ ...data });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={this.props.showForm ? 'form-container' : 'hidden'}>
            <div className="form_component">
              <h1>Resource</h1>
              <label>
                |-- Title:
                <input
                  name="title"
                  value={this.state.title}
                  onChange={(e) => this.handleChange(e)}
                ></input>
              </label>
              <br />

              <label>
                |-- Group: 
                <select
                  name="group"
                  value={this.state.group}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option>- Select -</option>
                  <option>Resources</option>
                  {/* <option>Post</option> */}
                </select>
              </label>
              <br />

              <label>
                |-- URL: 
                <input
                  name="url"
                  value={this.state.url}
                  onChange={(e) => this.handleChange(e)}
                ></input>
              </label>
              <br />
              <br />

              <input type="submit" value="submit" onClick={(e) => this.onFormSubmit(e)} />
              <input type="submit" value="update" onClick={(e) => this.updateContent(e)} />
            </div>
          </div>
          <div className="resource-container">
            <ResourceView
              resourceData={this.state.data}
              resourceDelete={this.deleteData}
              selectedData={this.selectedData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Resource;
