import Home from "./pages/Home";
import About from "./pages/About";

import Header from "./components/Header"
import Footer from "./components/Footer"

import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

