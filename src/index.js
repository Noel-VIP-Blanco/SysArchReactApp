import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages Imported
import { Home } from './pages/home.page'
import { Features } from './pages/features.page';
import { Pricing } from './pages/pricing.page';
import { Register } from './pages/register.page';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

