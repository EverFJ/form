import React from "react";

class Output extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="mt-5">Form submitted</h1>
        <p>First name : {this.props.firstName}</p>
        <p>Last name : {this.props.lastName}</p>
        <p>Email address : {this.props.email}</p>
      </div>
    );
  }
}

export default Output;
