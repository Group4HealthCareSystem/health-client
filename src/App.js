import React from "react";
import RoutePage from "./routes/route";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <RoutePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
