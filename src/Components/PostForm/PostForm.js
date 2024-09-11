import React, { Component } from 'react'

 class PostForm extends Component {
  render() {
    return (
      <>
        <div className='posts_form_wrapper'>
           <h1 className='post_form_title'>Add New Post</h1>
           <form>
              <div className='input_and_label'>
                 <label className='form_label'>Post Title: </label>
                 <input type='text' placeholder='Title' className='form_input' required/>
              </div>
              <div className='input_and_label'>
                 <label className='form_label'>Post Text: </label>
                 <textarea type='text' placeholder='Text' className='form_input text_area' required/>
              </div>
              <button type='submit' className='btn_form'>Submit</button>
           </form>
        </div>
      </>
    )
  }
}
export default PostForm