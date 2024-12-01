import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Services from "./Components/Services";

function App() {
  return (
    <Router>
      <Nav />
      <Services />

      {/* <Hero /> */}
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
