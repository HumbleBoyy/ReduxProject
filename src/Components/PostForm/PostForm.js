import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createPost } from '../../actions/postActions';
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

  //  Call action
  this.props.createPost(post);

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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);
