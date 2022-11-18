import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    // fetch("https://api.bigcommerce.com/stores/er26g0ht39/v3/catalog/products", {
    fetch("http://localhost:9000/testAPI", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
        Accept: "application/json",
        "X-Auth-Token": "i0kvpganu2sc0jig23mebnhhaosnfdv",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
