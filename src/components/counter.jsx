import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };

  render() {
    console.log("props", this.props.ii);
    return (
      <div>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.ii)}
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  };

  getBadge = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
