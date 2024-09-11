import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    // Bind the methods to the component's context
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle input changes
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="posts_form_wrapper">
        <h1 className="post_form_title">Add New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input_and_label">
            <label className="form_label">Post Title:</label>
            <input
              type="text"
              placeholder="Title"
              className="form_input"
              name="title"
              required
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </div>
          <div className="input_and_label">
            <label className="form_label">Post Text:</label>
            <textarea
              placeholder="Text"
              className="form_input text_area"
              name="body" 
              required
              onChange={this.handleInputChange}
              value={this.state.body}
            />
          </div>
          <button type="submit" className="btn_form">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
