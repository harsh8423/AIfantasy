import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import PredictionPage from "./screens/PredictionPage";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/PredictionPage" element={<PredictionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
