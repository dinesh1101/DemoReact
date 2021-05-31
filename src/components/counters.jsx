import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 9 },
      { id: 2, value: 8 },
      { id: 3, value: 7 },
      { id: 4, value: 6 }
    ]
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //console.log(index);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterid) => {
    const counters = this.state.counters.filter((c) => c.id !== counterid);
    // this.setState({ counters: counters });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-3"
          onClick={this.handleReset}
        >
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id} //value={counter.value}  // id={counter.id} *using count object to simplify code
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
