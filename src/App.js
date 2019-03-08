import React from 'react';

//import logo from './logo.svg';
import './App.css';
import Logo from './Logo'

import { Modes, DefaultMode } from './consts'
import { Selector, Item } from './Selector'

import { getEntriesAPI } from './api'

const memoize = require('fast-memoize')


// NOTE: react hooks not used cos need wait some time until they really become "best React practices"

const getEntries = memoize(getEntriesAPI)

class App extends React.Component {
  state = {
    mode: DefaultMode,
    isEntriesActual: false,
    entries: [],
    activeEntry: null,
  }

  onChange = async (value) => {
    this.setState( {mode: value} )
  }

  loadEntries() {
    getEntriesAPI(this.state.mode).then(
      (entries) => this.setState({
        entries,
        isEntriesActual: true,
      })
    ).catch(
      (error) => alert('Entries load error')  // naive alert
    )
  }

  componentDidMount() {
    this.loadEntries()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.mode !== prevState.mode) {
      this.setState( { isEntriesActual: false } )
    }

    if (!this.state.isEntriesActual) {
      this.loadEntries()
    }
  }

  render() {
    const { mode, isEntriesActual, entries, activeEntry } = this.state;

    //console.log('entries', getEntries(mode))

    let entriesRendered;
    if (isEntriesActual) {
      entriesRendered = entries.map(
        (e, i) => <li className={e === activeEntry ? 'active' : ''} key={i} >{e}</li>
      )
    } else {
      entriesRendered = <li>Loading...</li>
    }

    return (
      <React.Fragment>
        <header>
          <Logo src="/logo.png" />

          <Selector name="main-selector" onChange={this.onChange}
            defaultChecked={this.state.mode}
          >
            { Modes.map( (m, i) => <Item key={i} value={m} label={`${m} mode`} /> ) }
          </Selector>

        </header>

        <main>
          <ul className={`entries ${mode}`}>
            { entriesRendered }
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
