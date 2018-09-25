import React, { Component } from 'react'
import NavBar from './NavBar.js'
import './App.css'
import './ManagePage.css'

class ManagePage extends Component {

  render() {
    return (
      <div>
        <header id="nav-bar">
          <NavBar />
        </header>
        <main>
          <div id="manage">
            <div className="char-name-area">
              <label>Name &nbsp;</label>
              <input className="name-input" type="text" name="charname" />
              {/* <input type="text" name="charname" value={this.state.name} onChange={this.handleNameChange} /> */}
            </div>
            <div id="manage-stats">
              <div className="stat-row">
                <span>
                  <label>Strength &nbsp; </label>
                  <input type="text" name="charname" />
                </span>
                <span>
                  <label>Intelligence &nbsp; </label>
                  <input type="text" name="charname" />
                </span>
              </div>
              <div className="stat-row">
                <span>
                  <label>Dexterity &nbsp; </label>
                  <input type="text" name="charname" />
                </span>
                <span>
                  <label>Wisdom &nbsp; </label>
                  <input type="text" name="charname" />
                </span>
              </div>
              <div className="stat-row">
                <span>
                  <label>Constitution &nbsp; </label>
                  <input type="text" name="charname" />
                </span>
                <span>
                  <label>Charism &nbsp;  </label>
                  <input type="text" name="charname" />
                </span>
              </div>
              <span>
                {/* Buttons go here */}
                <label>Create/Update</label>
                <label>Delete</label>
              </span>
            </div>
          </div>
        </main>
        <footer>
          <p>
            &copy; Ken Mason 2018
          </p>
        </footer>
      </div>
    )
  }
}

export default ManagePage
