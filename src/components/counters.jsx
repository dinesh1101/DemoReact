import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ ii: 4 }, { ii: 1 }, { ii: 6 }, { ii: 0 }]
  };

  handleDelete = (counterid) => {
    console.log("counterid called", counterid);
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.ii}
            value={counter.value}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
