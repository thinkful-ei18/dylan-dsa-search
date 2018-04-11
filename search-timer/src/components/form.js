import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linearSearchIterations: -2,
      binarySearchIterations: -2,
      input: 0,
      arr: [
        1,
        11,
        13,
        13,
        13,
        14,
        14,
        15,
        16,
        16,
        17,
        2,
        21,
        22,
        23,
        24,
        25,
        25,
        26,
        26,
        27,
        27,
        27,
        28,
        28,
        28,
        3,
        30,
        31,
        32,
        32,
        33,
        34,
        38,
        38,
        39,
        40,
        40,
        42,
        42,
        43,
        44,
        45,
        46,
        46,
        46,
        48,
        49,
        5,
        50,
        51,
        51,
        53,
        53,
        54,
        55,
        56,
        6,
        6,
        6,
        62,
        63,
        64,
        64,
        64,
        65,
        67,
        68,
        69,
        69,
        7,
        7,
        70,
        70,
        72,
        72,
        73,
        73,
        76,
        78,
        78,
        80,
        81,
        82,
        83,
        84,
        85,
        87,
        87,
        88,
        88,
        89,
        9,
        9,
        90,
        91,
        93,
        97,
        98,
        98
      ]
    };
    this.updateInput = this.updateInput.bind(this);
    this.linearSearch = this.linearSearch.bind(this);
    this.binarySearch = this.binarySearch.bind(this);
    this.binarySearcher = this.binarySearcher.bind(this);
  }

  updateInput(event) {
    this.setState({ input: parseInt(event.target.value) });
  }

  linearSearch() {
    let num = this.state.input;
    let i = 1;
    for (i; i < this.state.arr.length; i++) {
      if (this.state.arr[i - 1] === num) break;
    }
    return this.setState({ linearSearchIterations: i });
  }

  binarySearcher(start = 0, end = this.state.arr.length) {
    let num = this.state.input;
    let middle = Math.floor((start + end) / 2);
    let result = [];
    if (start > end) return [1, 'not found'];
    if (num === this.state.arr[middle]) {
      return [1, `found at ${middle}`];
    } else if (num > this.state.arr[middle]) {
      result = this.binarySearcher(middle + 1, end);
      return [result[0] + 1, result[1]];
    } else {
      result = this.binarySearcher(start, middle - 1);
      return [result[0] + 1, result[1]];
    }
  }

  binarySearch() {
    this.setState({ arr: this.state.arr.sort((a, b) => a - b) });
    this.setState({ binarySearchIterations: this.binarySearcher() });
  }

  render() {
    let searchResults =
      this.state.linearSearchIterations !== -2
        ? `Linear search ran in ${this.state.linearSearchIterations} iterations
          `
        : '';
    searchResults +=
      this.state.binarySearchIterations !== -2
        ? `Binary search ran in ${
            this.state.binarySearchIterations[0]
          } iterations ${this.state.binarySearchIterations[1]}`
        : '';
    return (
      <div>
        <h2>Search some stuff</h2>
        <input
          type="text"
          className="input"
          value={this.state.value}
          onChange={this.updateInput}
        />
        <button onClick={() => this.linearSearch()}>Linear Search</button>
        <button onClick={() => this.binarySearch()}>Binary Search</button>
        <p>{searchResults}</p>
      </div>
    );
  }
}
