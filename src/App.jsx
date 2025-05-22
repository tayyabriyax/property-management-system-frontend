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
import { Layout, PrivateRoute } from './Layout';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/clients" element={<PrivateRoute> <Clients /> </PrivateRoute>} />
          <Route path="/properties" element={<PrivateRoute> <Property /> </PrivateRoute>} />
          <Route path="/rentals" element={<PrivateRoute> <Rentals /> </PrivateRoute>} />
          <Route path="/broker" element={<PrivateRoute> <Broker /> </PrivateRoute>} />
          <Route path="/setup/view" element={<PrivateRoute> <Views /> </PrivateRoute>} />
          <Route path="/setup/community" element={<PrivateRoute> <Community /> </PrivateRoute>} />
          <Route path="/setup/sub-community" element={<PrivateRoute> <SubCommunity /> </PrivateRoute>} />
          <Route path="/setup/types" element={<PrivateRoute> <Type /> </PrivateRoute>} />
          <Route path="/setup/developers" element={<PrivateRoute> <Developer /> </PrivateRoute>} />
          <Route path="/setup/banks" element={<PrivateRoute> <Bank /> </PrivateRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
