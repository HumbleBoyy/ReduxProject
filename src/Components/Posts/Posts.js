import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/postActions'

 class Posts extends Component {

  componentWillMount(){
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
    }
  }
 
  render() {
    // Mapping the posts array to display on the window
    const postItems = this.props.posts.map(post => (
        <div key={post.id} className='post_wrapper'>
           <h2>{post.id}</h2>
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

Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
   posts: state.posts.items,
   newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPost})(Posts)


// Copy of the initial code

// import React, { Component } from 'react'

//  class Posts extends Component {

//   // Component state
//   constructor(props){
//     super(props);
//       this.state = {
//         posts: []
//       }
//   }

//   // Fetching data
//   componentWillMount(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => this.setState({ posts: data }))
//   }

//   render() {
//     // Mapping the posts array to display on the window
//     const postItems = this.state.posts.map(post => (
//         <div key={post.id} className='post_wrapper'>
//            <h2>{post.id}</h2>
//            <h3 className='post_title'>{post.title}</h3>
//            <p className='post_body'>{post.body}</p>
//         </div>
//     ))
//     return (
//       <>
//       <h1 className='posts_title'>All Posts</h1>
//       <div className='posts_wrapper'>
//         {postItems}
//       </div>
//     </>
//     )
//   }
// }


// export default Posts