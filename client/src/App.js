import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import {StockData} from "./components/pages/StockData";
import {Home} from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./components/layout/Navbar.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/stock-data/:symbol/:startDate/:endDate" element={<StockData/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

