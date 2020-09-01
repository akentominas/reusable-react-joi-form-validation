import React, { Component } from "react";

class InputField extends Component {
  state = {};
  render() {
    const { label, name, value, onChange, error, type } = this.props;
    return (
      <React.Fragment>
        {" "}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">{label}</label>
          <input
            value={value}
            onChange={onChange}
            type="text"
            name={name}
            id={name}
            className="form-control"
            type={type}
          />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </React.Fragment>
    );
  }
}

export default InputField;
