import "./App.css";
import Nav from "./component/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Footer from "./component/Footer";
import Contactpage from "./pages/Contact";
import Products from "./pages/Products";
import HightoLow from "./component/HightoLow";
import LowtoHigh from "./component/LowtoHigh";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Products/HightoLow" element={<HightoLow />} />
          <Route path="/Products/LowtoHigh" element={<LowtoHigh />} />
          <Route path="/Contact" element={<Contactpage />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
