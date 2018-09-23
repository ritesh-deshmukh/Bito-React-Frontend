import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5001/next10")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.state.items)
      return (
        <div></div>
      );
    
  }
}
export default App;
