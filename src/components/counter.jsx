import React, { Component } from "react";

//import counters from './counters';
class Counter extends Component {
  render() {
    console.log("props id is", this.props.counter.id);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadge()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
            disabled={this.props.counter.value === 0 ? "diabled" : ""}
          >
            -
          </button>

          <button
            className="btn btn-danger btn-sm m-2 "
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
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
