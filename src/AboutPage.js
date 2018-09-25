import React, { Component } from 'react'
import NavBar from './NavBar.js'
import './AboutPage.css'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <header id="nav-bar">
          <NavBar />
        </header>
        <main>
          "This is the About Page. Link to Git Page."
        </main>
      </div>
    )
  }
}

export default AboutPage
