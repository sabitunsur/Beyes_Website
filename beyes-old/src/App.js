import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Solutions from './pages/Solutions/Solutions';
import Products from './pages/Products/Products';
import Heysem from './pages/Products/Heysem';
import SCNMS from './pages/Products/SCNMS';
import Ofcomto from './pages/Products/Ofcomto';
import BePower from './pages/Products/BePower';
import Nosi from './pages/Products/Nosi';
import BeSens from './pages/Products/BeSens';
import BeRoad from './pages/Products/BeRoad';
import BeFlood from './pages/Products/BeFlood';
import BePopup from './pages/Products/BePopup';
import IPPDU from './pages/Products/IPPDU';
import SmartWork from './pages/Products/SmartWork';
import ServisPozitif from './pages/Products/ServisPozitif';
import LioxERP from './pages/Products/LioxERP';
import Girus from './pages/Products/Girus';
import AITechnologies from './pages/Solutions/AITechnologies';
import ICTTechnologies from './pages/Solutions/ICTTechnologies';
import DefenseTechnologies from './pages/Solutions/DefenseTechnologies';
import ProfessionalServices from './pages/Solutions/ProfessionalServices';
import LifeAtBeyesDetails from './pages/Career/LifeAtBeyesDetails';
import LifeAtBeyes from './pages/Career/LifeAtBeyes';
import BeingAPartOfBeyes from './pages/Career/BeingAPartOfBeyes';
import BeingAPartOfBeyesDetails from './pages/Career/BeingAPartOfBeyesDetails';
import References from './pages/References';
import AR_GE from './pages/AR-GE/AR-GE';
import Robot from './pages/AR-GE/Robot';
import AIComputer from './pages/AR-GE/AIComputer';
import DronControl from './pages/AR-GE/DronControl';
import Slipring from './pages/AR-GE/Slipring';
import WaterGenerator from './pages/AR-GE/WaterGenerator';
import OpticalTechnologies from './pages/AR-GE/OpticalTechnologies';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/heysem" element={<Heysem />} />
        <Route path="/products/sc-nms" element={<SCNMS />} />
        <Route path="/products/ofcomto" element={<Ofcomto />} />
        <Route path="/products/bepower" element={<BePower />} />
        <Route path="/products/nosi" element={<Nosi />} />
        <Route path="/products/besens" element={<BeSens />} />
        <Route path="/products/beroad" element={<BeRoad />} />
        <Route path="/products/beflood" element={<BeFlood />} />
        <Route path="/products/bepopup" element={<BePopup />} />
        <Route path="/products/ippdu" element={<IPPDU />} />
        <Route path="/products/smartwork" element={<SmartWork />} />
        <Route path="/products/servispozitif" element={<ServisPozitif />} />
        <Route path="/products/lioxerp" element={<LioxERP />} />
        <Route path="/products/girus" element={<Girus />} />
        <Route path="/solutions/ai" element={<AITechnologies />} />
        <Route path="/solutions/ict" element={<ICTTechnologies />} />
        <Route path="/solutions/defense" element={<DefenseTechnologies />} />
        <Route path="/solutions/professional-services" element={<ProfessionalServices />} />
        <Route path="/career/life-at-beyes" element={<LifeAtBeyes />} />
        <Route path="/career/life-at-beyes-details" element={<LifeAtBeyesDetails />} />
        <Route path="/career/being-a-part-of-beyes" element={<BeingAPartOfBeyes />} />
        <Route path="/career/being-a-part-of-beyes-details" element={<BeingAPartOfBeyesDetails />} />
        <Route path="/references" element={<References />} />
        <Route path="/ar-ge" element={<AR_GE />} />
        <Route path="/ar-ge/robot" element={<Robot />} />
        <Route path="/ar-ge/ai-computer" element={<AIComputer />} />
        <Route path="/ar-ge/dron-control" element={<DronControl />} />
        <Route path="/ar-ge/slipring" element={<Slipring />} />
        <Route path="/ar-ge/water-generator" element={<WaterGenerator />} />
        <Route path="/ar-ge/optical-technologies" element={<OpticalTechnologies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
