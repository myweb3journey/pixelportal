// style
import './App.css';

// router
import { Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar';

// pages
import Landing from "./pages/Landing"
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

          {/* Home */}
          <Route path="/" exact element={<Landing/>}/>

          {/* Dashboard */}
          <Route path="/dashboard" exact element={<Dashboard/>}/>

          {/* Marketplace */}
          <Route path="/marketplace" exact element={<Marketplace/>}/>

      </Routes>
    </div>
  );
}

export default App;
