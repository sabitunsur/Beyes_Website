import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Heysem from './pages/Products/Heysem';
import SCNMS from './pages/Products/SCNMS';
import Ofcomto from './pages/Products/Ofcomto';
import BePower from './pages/Products/BePower';
import Nosi from './pages/Products/Nosi';
import BeSens from './pages/Products/BeSens';
import AITechnologies from './pages/Solutions/AITechnologies';
import ICTTechnologies from './pages/Solutions/ICTTechnologies';
import DefenseTechnologies from './pages/Solutions/DefenseTechnologies';
import ProfessionalServices from './pages/Solutions/ProfessionalServices';
import LifeAtBeyesDetails from './pages/Career/LifeAtBeyesDetails';
import LifeAtBeyes from './pages/Career/LifeAtBeyes';
import BeingAPartOfBeyes from './pages/Career/BeingAPartOfBeyes';
import BeingAPartOfBeyesDetails from './pages/Career/BeingAPartOfBeyesDetails';
import References from './pages/References';

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
        <Route path="/solutions/ai" element={<AITechnologies />} />
        <Route path="/solutions/ict" element={<ICTTechnologies />} />
        <Route path="/solutions/defense" element={<DefenseTechnologies />} />
        <Route path="/solutions/professional-services" element={<ProfessionalServices />} />
        <Route path="/career/life-at-beyes" element={<LifeAtBeyes />} />
        <Route path="/career/life-at-beyes-details" element={<LifeAtBeyesDetails />} />
        <Route path="/career/being-a-part-of-beyes" element={<BeingAPartOfBeyes />} />
        <Route path="/career/being-a-part-of-beyes-details" element={<BeingAPartOfBeyesDetails />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
