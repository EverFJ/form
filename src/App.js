import React from "react";
import "./App.css";

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
    this.setState({ password: e.target.value });
    if (this.state.password.length > 5) {
      this.setState({ passwordIsValid: true });
    }
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
    console.log(this.state.emailIsValid);
    if (
      this.state.emailIsValid === true &&
      this.state.passwordIsValid === true
    ) {
      this.setState({ isSubmitted: true });
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center">Login</h1>
        {this.state.isSubmitted ? (
          <div className="text-center">
            <h1 className="mt-5">Form submitted</h1>
            <p>First name : {this.state.firstName}</p>
            <p>Last name : {this.state.lastName}</p>
            <p>Email address : {this.state.email}</p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-6">
                <label className="form-label mt-2">First name</label>
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  onChange={this.handleFirstNameChange}
                />
                <label className="form-label mt-2">Last name</label>
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  onChange={this.handleLastNameChange}
                />
                <label className="form-label mt-2">Email address</label>
                <input
                  className={`form-control ${
                    this.state.emailIsValid ? "is-valid" : "is-invalid"
                  }`}
                  type="email"
                  id="email"
                  onChange={this.handleEmailChange}
                />
                <label className="form-label mt-2">Password</label>
                <input
                  className={`form-control ${
                    this.state.passwordIsValid ? "is-valid" : "is-invalid"
                  }`}
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handlePasswordChange}
                />
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    onChange={this.handleRememberMeChange}
                  />
                  <label className="form-check-label">Remember me</label>
                </div>
                <div className="mt-2">
                  <button className="btn btn-primary" type="submit">
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
