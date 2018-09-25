import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import AboutPage from './AboutPage'
import './App.css'

class App extends Component {

  renderManagePage = () => {
    return (<ManagePage />)
  }

  renderAboutPage = () => {
    return (<AboutPage />)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.renderManagePage} />
          <Route path="/About" component={this.renderAboutPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
