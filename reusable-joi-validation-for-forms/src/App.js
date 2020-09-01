import React, { Component } from "react";
import "./App.css";
import LoginPage from "./form-components/login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginPage />
      </React.Fragment>
    );
  }
}

export default App;
