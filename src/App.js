import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo'

import { Selector, Item } from './Selector'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Logo src="/logo.png" />

          {/* <div className="selector">
              <div>
              <input id="radio-mode-app" type="radio" name="mode" value="app" />
              <label for="radio-mode-app">app mode</label>
              </div>
              <div>
              <input id="radio-mode-admin" type="radio" name="mode" value="admin" />
              <label for="radio-mode-admin">admin mode</label>
              </div>
              </div> */}

          <Selector name="main-selector">
            <Item value="app" label="app mode" />
            <Item value="admin" label="admin mode" />
          </Selector>

        </header>

        <main>
          <ul className="entries">
            <li>Entry1</li>
            <li>Entry2</li>
            <li className="active">Entry3</li>
          </ul>
        </main>

        {/*
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            </header>
            </div>
          */}
      </React.Fragment>
    );
  }
}

export default App;
