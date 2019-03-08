import React from 'react';

//import logo from './logo.svg';
import './App.css';
import Logo from './Logo'

import { Modes, DefaultMode } from './consts'
import { Selector, Item } from './Selector'
import { Menu } from './Menu'

import { getEntriesAPI } from './api'

import memoize from 'fast-memoize';


// memoize redundant "ajax calls"
const getEntries = memoize(getEntriesAPI)


// NOTE: react hooks used minimally as not sure it's very mature "best React practices"

class App extends React.Component {
  state = {
    mode: DefaultMode,
    isEntriesActual: false,
    entries: [],
    //activeEntry: null,
  }

  onChange = async (value) => {
    this.setState( {mode: value} )
  }

  loadEntries() {
    getEntries(this.state.mode).then(
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
    const { mode, isEntriesActual, entries } = this.state;

    return (
      <React.Fragment>
        <header>
          <Logo src="/logo.png" />

          <Selector name="main-selector" onChange={this.onChange}
            defaultChecked={mode}
          >
            { Modes.map( (m, i) => <Item key={i} value={m} label={`${m} mode`} /> ) }
          </Selector>

        </header>


        <main>
          { isEntriesActual
            ? <Menu items={entries} className={`entries ${mode}`} />
            : <span>Loading...</span>
          }
        </main>
      </React.Fragment>
    );
  }
}

export default App;
