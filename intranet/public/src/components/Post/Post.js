import React, { Component } from 'react';
import PostView from './PostView';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: '',
      img: '',
      title: '',
      group: '',
      url: '',
      post: '',
    };
    this.readContent = this.readContent.bind(this);
    this.addContent = this.addContent.bind(this);
    this.deleteData = this.deleteData.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.selectedData = this.selectedData.bind(this);
  }

  componentDidMount() {
    this.readContent();
  }

  // Crud events

  readContent() {
    console.log('Reading data from API');
    axios.get('http://localhost:3050/api/resources').then((res) => {
      this.setState({
        data: [...res.data],
      });
    });
  }

  addContent(data) {
    console.log('Adding post to API...');
    axios.post('http://localhost:3050/api/resources', data).then((res) => {
      this.setState({
        data: [...res.data],
      });
    });
  }

  updateContent(event) {
    event.preventDefault();
    console.log('Updating post to API...');
    const { id, img, title, group, url, post } = this.state;
    if (this.state.id !== '') {
      axios
        .post(`http://localhost:3050/api/resources/${id}`, { img, title, group, url, post })
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

  // Form Events

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
      img: '',
      group: '',
      url: '',
      post: '',
    });
  }

  selectedData(data) {
    console.log('Selected Post for Form...', data);
    this.setState({ ...data });
  }

  render() {
    return (
      <div className="container">
        <h1>Blog and Post Directory</h1>
        <br />
        <div className="row">
          <div className={this.props.showForm ? 'form-container' : 'hidden'}>
            <h1>Post</h1>
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
              |-- Image:
              <input
                name="img"
                value={this.state.img}
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
                <option>Post</option>
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
            <span>|-- Notes</span>
            <br />
            <textarea
              name="post"
              value={this.state.post}
              onChange={(e) => this.handleChange(e)}
            ></textarea>

            <br />

            <br />

            <input type="submit" value="submit" onClick={(e) => this.onFormSubmit(e)} />
            <input type="submit" value="update" onClick={(e) => this.updateContent(e)} />
          </div>
          <div className={'post-container'}>
            <PostView
              postData={this.state.data}
              selectedData={this.selectedData}
              postDelete={this.deleteData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
