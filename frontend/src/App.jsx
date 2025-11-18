import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import FindGroup from './pages/FindGroup';
import AvailableGroups from './Pages/AvailableGroups';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/find-group" element={<FindGroup />} />
      <Route path="/available-groups" element={<AvailableGroups />} />
    </Routes>
  );
}
