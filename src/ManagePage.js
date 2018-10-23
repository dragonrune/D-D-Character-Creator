import React, { Component } from 'react'
import NavBar from './NavBar.js'
import './ManagePage.css'

class ManagePage extends Component {

  state = {
    id: '',
    name: '',
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: '',
    Characters: []
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleStrengthChange = (event) => {
    this.setState({
      str: event.target.value
    })
  }

  handleDexterityChange = (event) => {
    this.setState({
      dex: event.target.value
    })
  }

  handleConstitutionChange = (event) => {
    this.setState({
      con: event.target.value
    })
  }

  handleIntelligenceChange = (event) => {
    this.setState({
      int: event.target.value
    })
  }

  handleWisdomChange = (event) => {
    this.setState({
      wis: event.target.value
    })
  }

  handleCharismaChange = (event) => {
    this.setState({
      cha: event.target.value
    })
  }

  componentDidMount = () => {
    // GET -- grab list of characters from API
    fetch('http://localhost:3030/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((chars) => {
        this.setState({ characters: chars })
      })
      .catch(() => {
        return (this.setState({ errormessage: "Error- What the #$%^ did you do ?!" }))
      })
  }

  updateData = () => {
    fetch('http://localhost:3030/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        str: this.state.str,
        dex: this.state.dex,
        con: this.state.con,
        int: this.state.int,
        wis: this.state.wis,
        cha: this.state.cha
      })
    })
      .then((response) => response.json())
      .then((chars) => {
        this.setState({ characters: chars })
      })
      .catch(() => {
        return (this.setState({ errormessage: "Error- What the #$%^ did you do ?!" }))
      })
  }

  postData = () => {
    fetch('http://localhost:3030/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        str: this.state.str,
        dex: this.state.dex,
        con: this.state.con,
        int: this.state.int,
        wis: this.state.wis,
        cha: this.state.cha
      })
    })
      .then((response) => response.json())
      .then((chars) => {
        this.setState({ characters: chars })
      })
      .catch(() => {
        return (this.setState({ errormessage: "Error- What the #$%^ did you do ?!" }))
      })
  }

  saveCharacter = () => {
    if (this.state.id) {
      // Below updates a record
      this.updateData()
    } else {
      // Below creates a record
      this.postData()
    }
    // Either way, clear the screen fields
    this.setState({
      id: '',
      name: '',
      str: '',
      dex: '',
      con: '',
      int: '',
      wis: '',
      cha: ''
    })
  }

  deleteData = () => {
    fetch('http://localhost:3030/', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id
      })
    })
      .then((response) => response.json())
      .then((chars) =>
        this.setState({ characters: chars })
      )
      .catch(() => {
        return (this.setState({ errormessage: "Error- What the #$%^ did you do ?!" }))
      })
  }

  deleteCharacter = () => {
    this.deleteData()
    this.setState({
      name: '',
      str: '',
      dex: '',
      con: '',
      int: '',
      wis: '',
      cha: ''
    })
  }

  selectHandler = (char) => {
    this.setState({
      id: char._id,
      name: char.name,
      str: char.str,
      dex: char.dex,
      con: char.con,
      int: char.int,
      wis: char.wis,
      cha: char.cha
    })
  }

  renderCharacters = () => {
    if (this.state.characters) {
      const char = this.state.characters.map(
        (n, i) => {
          return (
            <div id='char-map' key={i}>
              <button onClick={() => this.selectHandler(n)}>{n.name}</button>
              <div>{n.str}</div>
              <div>{n.dex}</div>
              <div>{n.con}</div>
              <div>{n.int}</div>
              <div>{n.wis}</div>
              <div>{n.cha}</div>
            </div>
          )
        }
      )
      return char
    }
  }

  render = () => {
    return (
      <div>
        <header id="nav-bar">
          <NavBar />
        </header>
        <main>
          <div id="manage">
            <div className="char-name-area">
              <label>Name &nbsp;</label>
              <input className="name-input" type="text" name="charname" value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div id="manage-stats">
              <div className="stat-row">
                <span>
                  <label>Strength &nbsp; </label>
                  <input type="text" name="strength" value={this.state.str} onChange={this.handleStrengthChange} />
                </span>
                <span>
                  <label>Intelligence &nbsp; </label>
                  <input type="text" name="intelligence" value={this.state.int} onChange={this.handleIntelligenceChange} />
                </span>
              </div>
              <div className="stat-row">
                <span>
                  <label>Dexterity &nbsp; </label>
                  <input type="text" name="dexterity" value={this.state.dex} onChange={this.handleDexterityChange} />
                </span>
                <span>
                  <label>Wisdom &nbsp; </label>
                  <input type="text" name="wisdom" value={this.state.wis} onChange={this.handleWisdomChange} />
                </span>
              </div>
              <div className="stat-row">
                <span>
                  <label>Constitution &nbsp; </label>
                  <input type="text" name="constitution" value={this.state.con} onChange={this.handleConstitutionChange} />
                </span>
                <span>
                  <label>Charism &nbsp;  </label>
                  <input type="text" name="charisma" value={this.state.cha} onChange={this.handleCharismaChange} />
                </span>
              </div>
              <span className="stat-row">
                {/* Buttons go here */}
                <button onClick={this.saveCharacter}>Create/Update</button>
                <button onClick={this.deleteCharacter}>Delete</button>
              </span>
            </div>
            <div id="list-chars">
              <p></p> {/* blank line to separate headings */}
              <section className="top-labels">
                <div>Name</div><div>STR</div><div>DEX</div><div>CONS</div><div>INT</div><div>WIS</div><div>CHA</div>
              </section>
              <p></p> {/* blank line to separate data from headings */}
              <section className="bottom-labels">
                {/* Character data goes here */}
                {this.renderCharacters()}
              </section>
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
