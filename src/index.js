import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Register from "./Register.js";

import Stopwatch from "react-stopwatch";

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Register />, document.getElementById("reg"));
registerServiceWorker();
