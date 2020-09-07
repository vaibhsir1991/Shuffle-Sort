import React from "react";
import Container from "./components/container";

import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <div className="main">
        <Container />
      </div>
    </div>
  );
};

export default App;
