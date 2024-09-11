import React, { Component } from 'react'
import logo from './logo.svg'
 class App extends Component {
  render() {
    return (
      <>
        <div className='App'>
            <header className='App_header'>
                <img src={logo} alt='Logo' className='logo'/>
                <h1 className='title'>Redux Toolkit || Small Project</h1>
            </header>
        </div>
      </>
    )
  }
}

export default App