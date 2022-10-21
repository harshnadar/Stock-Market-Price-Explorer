import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Import the pages
// import Navbar from "./components/Navbar";
import {StockData} from "./components/pages/StockData";
import {Home} from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/stock-data/:symbol" element={<StockData/>} />
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

