import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      term: value,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Level-1 React App</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
