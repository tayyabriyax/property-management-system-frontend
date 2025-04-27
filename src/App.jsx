import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Clients from './pages/Clients';
import Property from './pages/Property';
import Rentals from './pages/Rentals';
import Broker from './pages/Broker';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-[#F8FAFC] p-6">
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/properties" element={<Property />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/broker" element={<Broker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
