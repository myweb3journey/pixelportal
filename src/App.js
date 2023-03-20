// style
import './App.css';

// router
import { Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar';
import CreatorPool from './components/CreatorPool';
import Shop from './components/Shop'

// pages
import Landing from "./pages/Landing"
import Dashboard from './pages/Dashboard';
import CreateCollectible from './pages/CreateCollectible';
import CreateNFT from './pages/CreateNFT';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

          {/* Home */}
          <Route path="/" exact element={<Landing/>}/>

          {/* Dashboard */}
          <Route path="/dashboard" exact element={<Dashboard/>}/>

          {/* Create Collectible */}
          <Route path="/createcollectible" exact element={<CreateCollectible/>}/>

          {/* Create NFT */}
          <Route path="/createNFT" exact element={<CreateNFT/>}/>

          {/* DepositToCreatorPool */}
          <Route path="/creatorpool" exact element={<CreatorPool/>}/>

          {/* Shop */}
          <Route path="/shop" exact element={<Shop/>}/>

      </Routes>
      <div id="marketplace" class="row"></div>
      
    </div>
  );
}

export default App;
