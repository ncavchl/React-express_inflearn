import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import home from "./routes/home";
import About from "./routes/About";

function App(){
  return 
  <HashRouter>
    <Route path="/" component={home}/>
    <Route path="/about" component={About}/>
  </HashRouter>;
}

export default App;