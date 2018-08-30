import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import Timer2 from "./Timer";
import Stopwatch from "react-stopwatch";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Timer2 />, document.getElementById("timer"));

registerServiceWorker();
