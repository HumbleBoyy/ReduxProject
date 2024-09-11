import React, { Component } from 'react'

 class Posts extends Component {

  
  constructor(props){
    super(props);
      this.state = {
        posts: []
      }
  }

  // Fetching data
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({ posts: data }))
  }

  render() {

    const postItems = this.state.posts.map(post => (
        <div key={post.id} className='post_wrapper'>
           <h3 className='post_title'>{post.title}</h3>
           <p className='post_body'>{post.body}</p>
        </div>
    ))
    return (
      <>
      <h1 className='posts_title'>All Posts</h1>
      <div className='posts_wrapper'>
        {postItems}
      </div>
    </>
    )
  }
}


export default Posts