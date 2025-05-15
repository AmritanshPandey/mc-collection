import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dining from './pages/Dining/Dining'
import Peak from './pages/Dining/Experience/Peak';
import ReviewPage from './pages/Review/Review';


function AppRoutes() {
 

    return (
      <div>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/peak" element={<Peak />} />
          <Route path="/review" element={<ReviewPage />} />
        
          </Routes>
    </div>
  );
}

export default AppRoutes;