import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './App';
import AboutUs from './pages/AboutUs'; // Import the AboutUs component
import Celebrations from './pages/Celebrations';
import ContactUs from './pages/ContactUs';
import Destination from './pages/Destination';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/about' element={<AboutUs />} /> {/* Add the AboutUs component to the element */}
    <Route path='/celebrations' element={<Celebrations />} />
    <Route path='/contact' element={<ContactUs />} />
    <Route path='/destination' element={<Destination />} />

  </Routes>
  </BrowserRouter>
);

