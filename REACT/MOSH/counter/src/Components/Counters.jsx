import React, { Component, Fragment } from "react";
import Counter from "./Counter.jsx";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 7 },
      { id: 3, value: 1 },
      { id: 4, value: 9 },
    ],
  };
  handleDelete = (counterid) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterid
    );
    this.setState({ counters });
  };
  render() {
    return (
      <Fragment>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
