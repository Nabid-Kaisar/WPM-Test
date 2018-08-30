/*

import React, { Component } from "react";

import "./App.css";

class Timer extends Component {
  constructor(props) {
    super(props);

    var h1 = document.getElementById("watch"),
      start = document.getElementById("start"),
      stop = document.getElementById("stop"),
      clear = document.getElementById("clear"),
      seconds = 0,
      minutes = 0,
      hours = 0,
      t;

    this.state = {
      h1k: h1,
      startk: start,
      stopk: stop,
      cleark: clear,
      secondsk: seconds,
      minutesk: minutes,
      hoursk: hours
    };
  }

  render() {
    return (
      <div>
        <h1 id="watch">
          <time>00:00:00</time>
        </h1>
        <button id="start">start</button>
        <button id="stop">stop</button>
        <button id="clear">clear</button>
        <p>{this.state.h1k}</p>
      </div>
    );
  }
}

export default Timer;

*/

import React from "react";
import ReactDom from "react-dom";
import Stopwatch from "react-stopwatch";

ReactDom.render(
  <Stopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit={"00:00:10"}
    withLoop={true}
    onCallback={() => console.log("Finish")}
  />,
  document.getElementById("timer")
);
