import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailIsValid: false,
      rememberMe: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
  }

  handleEmailChange = (e) => {
    console.log(e.target.value);
    this.state.email = e.target.value;
    const result =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.email
      );
    if (result === true) {
      this.state.emailIsValid = true;
    }
  };
  handlePasswordChange = (e) => {
    console.log(e.target.value);
    this.state.password = e.target.value;
    if (this.state.password.length > 5) {
      this.state.passwordIsValid = true;
    }
  };
  handleRememberMeChange = () => {
    if (this.state.rememberMe === false) {
      this.state.rememberMe = true;
    } else {
      this.state.rememberMe = false;
    }
  };
  handleSubmit = (e) => {
    e.prevent.default();
    if (
      this.state.emailIsValid === true &&
      this.state.passwordIsValid === true
    ) {
      this.state.isSubmitted = true;
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center">Login</h1>
        (isSubmitted) ? (
        <h1 className="text-center">
          Form submitted (email is {this.state.email}
        </h1>
        ) : (
        <form className="">
          <div className="row justify-content-center">
            <div className="col-6">
              <label className="form-label mt-3" id="email">
                Email address
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                onChange={this.handleEmailChange}
              />
              <label className="form-label mt-3">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={this.handlePasswordChange}
              />
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={this.handleRememberMeChange}
                />
                <label className="form-check-label">Remember me</label>
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onSubmit={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
        )
      </>
    );
  }
}

export default App;
