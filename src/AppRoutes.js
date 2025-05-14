import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dining from './pages/Dining/Dining'


function AppRoutes() {
 

    return (
      <div>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/dining" element={<Dining />} />
        
          </Routes>
    </div>
  );
}

export default AppRoutes;