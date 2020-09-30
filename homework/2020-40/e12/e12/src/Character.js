import React from "react";
import axios from 'axios';
// import logo from "./logo.svg";
import "./App.css";
class Character extends React.Component {
  constructor () {
    super()
    // default state
    this.state = { name: "loading..." };
  }
  
  // Invoked when component is in the web page
  async componentDidMount() {
    const res = await axios.get(`https://swapi.dev/api/people/${this.props.id}/`)
    this.setState({ name: res.data.name }); 
  }

  // what is outputted in the UI
  render() {
    return <li>{this.state.name}</li>;
  }
}

export default Character;