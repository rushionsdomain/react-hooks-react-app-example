import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

function App() {
  return (
    <div>
      {/* Update the header to include "Now" instead of the formatted time */}
      <header>Now</header>

      {/* Include the ExampleComponent */}
      <ExampleComponent />

      {/* Include the TestComponent */}
      <TestComponent />
    </div>
  );
}

export default App;
