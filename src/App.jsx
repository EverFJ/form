import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Output from "./Components/Output";
import Input from "./Components/Input";

const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      emailIsValid: false,
      rememberMe: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
  }
  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleEmailChange = (e) => {
    // this.state.email = e.target.value;
    this.setState({
      email: e.target.value,
      emailIsValid: regex.test(e.target.value),
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      passwordIsValid: this.state.password.length > 5,
    });
  };
  handleRememberMeChange = () => {
    if (this.state.rememberMe === false) {
      this.setState({ rememberMe: true });
    } else {
      this.setState({ rememberMe: false });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({ isSubmitted: true });
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center">Login</h1>
        {this.state.isSubmitted ? (
          <Output
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
          />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-6">
                <Input
                  labelClassName="form-label mt-2"
                  inputClassName="form-control"
                  label="First name"
                  inputType="text"
                  inputId="firstName"
                  onChange={this.handleFirstNameChange}
                />
                <Input
                  labelClassName="form-label mt-2"
                  inputClassName="form-control"
                  label="Last name"
                  inputType="text"
                  inputId="lastName"
                  onChange={this.handleLastNameChange}
                />
                <Input
                  labelClassName="form-label mt-2"
                  inputClassName={`form-control ${
                    this.state.emailIsValid ? "is-valid" : "is-invalid"
                  }`}
                  label="Email"
                  inputType="email"
                  inputId="email"
                  onChange={this.handleEmailChange}
                />
                <Input
                  labelClassName="form-label mt-2"
                  inputClassName={`form-control ${
                    this.state.passwordIsValid ? "is-valid" : "is-invalid"
                  }`}
                  label="Password"
                  inputType="password"
                  inputId="password"
                  onChange={this.handlePasswordChange}
                />
                <Input
                  labelClassName="form-check-label"
                  inputClassName="form-check-input"
                  label="Remember me"
                  inputType="checkbox"
                  inputId="checkbox"
                  onChange={this.handleRememberMeChange}
                />
                <div className="mt-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </>
    );
  }
}

export default App;
