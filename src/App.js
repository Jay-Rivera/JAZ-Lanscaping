import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
