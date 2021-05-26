import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  render() {
    return (
      <div>
        <span></span>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
