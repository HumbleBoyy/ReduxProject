import React, { Component } from 'react'
import Posts from './Components/Posts/Posts'
import logo from './logo.svg'
import './App.css'
 class App extends Component {
  render() {
    return (
      <>
        <div className='App'>
            <header className='App_header'>
                <img src={logo} alt='Logo' className='App-logo'/>
                <h1 className='title'>Redux <span className='react_color'>Toolkit</span> || Small <span className='react_color'>Project</span></h1>
            </header>

            <Posts/>
        </div>
      </>
    )
  }
}

export default App