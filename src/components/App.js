import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login"

function App() {
  return(
  <Container 
   className="d-flex align-items-center justify-content-center"
   style={{ minHeight: "100vh" }}>

    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  </Container>)
}


export default App;
