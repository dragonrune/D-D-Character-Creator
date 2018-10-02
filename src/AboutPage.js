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
        <div id="about">
          This is the About Page.<br />

          This D&D Character database holds all of your character information.<br />

          My Github Repository: <a target='_blank' rel="noopener noreferrer" href="https://github.com/dragonrune/D-D-Character-Creator">Github - Dragonrune</a><br />
        </div>
        <footer>
          <p>
            &copy; Ken Mason 2018
          </p>
        </footer>
      </div>
    )
  }
}

export default AboutPage
