import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Page1 />} exact />
            <Route path="/page_2" element={<Page2 />} exact />
            <Route path="/page_3" element={<Page3 />} exact />
            <Route path="/page_4" element={<Page4 />} exact />
            <Route path="/page_5" element={<Page5 />} exact />
            <Route path="/page_6" element={<Page6 />} exact />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
