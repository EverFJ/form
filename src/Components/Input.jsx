import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <label className={this.props.labelClassName}>{this.props.label}</label>
        <input
          type={this.props.inputType}
          id={this.props.inputId}
          onChange={this.props.onChange}
          className={this.props.inputClassName}
        />
      </>
    );
  }
}

export default Input;
