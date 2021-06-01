import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onDelete,
      onDecrement,
      onIncrement,
      onReset
    } = this.props;
    return (
      <div class="container-fluid">
        <button className="btn btn-primary btn-sm m-3" onClick={onReset}>
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            counter={counter}
            key={counter.id} //value={counter.value}  // id={counter.id} *using count object to simplify code
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
