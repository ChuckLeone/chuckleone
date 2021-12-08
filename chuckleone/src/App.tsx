import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Portfolio from "./pages/Portfolio";
import Xr from "./pages/xr";
import './App.css';

function App() {
    return ( 
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="music/*" element={<Music />} />
          <Route path="portfolio/*" element={<Portfolio />} />
          <Route path="xr/*" element={<Xr />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;