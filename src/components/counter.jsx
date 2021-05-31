import React, { Component } from "react";
//import counters from './counters';
class Counter extends Component {
  render() {
    console.log("props id is", this.props.counter.id);
    return (
      <div>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  };

  getBadge = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
