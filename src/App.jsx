import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clients from './pages/Clients';
import Property from './pages/Property';
import Rentals from './pages/Rentals';
import Broker from './pages/Broker';
import Views from './pages/Views';
import Community from './pages/Community';
import SubCommunity from './pages/SubCommunity';
import Type from './pages/Type';
import Developer from './pages/Developer';
import Bank from './pages/Banks';
import { Layout } from './Layout';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/properties" element={<Property />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/setup/view" element={<Views />} />
          <Route path="/setup/community" element={<Community />} />
          <Route path="/setup/sub-community" element={<SubCommunity />} />
          <Route path="/setup/types" element={<Type />} />
          <Route path="/setup/developers" element={<Developer />} />
          <Route path="/setup/banks" element={<Bank />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
