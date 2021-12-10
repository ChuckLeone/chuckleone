import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./pages/home";
import Music from "./pages/music";
import Portfolio from "./pages/portfolio";
import Xr from "./pages/xr";
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
    return ( 
      <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="music/*" element={<Music />} />
            <Route path="portfolio/*" element={<Portfolio />} />
            <Route path="xr/*" element={<Xr />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      </>
    );
}

export default App;