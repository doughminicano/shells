/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Papa from "papaparse";
import Chart from "./charts/Charts";
import Receipts from "./components/Receipts"
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Footer from "./components/Footer"

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLcWMtx5kudM4VQvuEddlIRLDFJcnlrbk4U2i_VTFnvp7ykx963lqDH97FQu5gnYztDFNEZY0iKEjs/pub?gid=0&single=true&output=csv"
      );
      const text = await response.text();
      const parsed = Papa.parse(text, { header: true, dynamicTyping: true });
      setData(parsed.data);
    };

    fetchCSV();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard data={data} />} />
        <Route path="/charts" element={<Chart data={data} />} />
        <Route path="/receipts" element={<Receipts receipts={data} />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
