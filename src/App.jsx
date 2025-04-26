import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Clients from './pages/Clients';

const Dashboard = () => <div>Dashboard</div>;
const Properties = () => <div>Properties</div>;
const Tenants = () => <div>Tenants</div>;

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-[#F8FAFC] p-6">
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/tenants" element={<Tenants />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
