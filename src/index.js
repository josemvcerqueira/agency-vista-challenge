import React from "react";
import ReactDOM from "react-dom";
import ClientSummary from "./pages/client-summary";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ClientSummary />, document.getElementById("root"));

serviceWorker.unregister();
