import React from "react";
import { HomePage } from "./components/HomePage";
import { OrderOverview } from "./components/OrderOverview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<OrderOverview />} />
        </Routes>
      </Router>
      </>
  );
};

export default App;
