import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ListCompany from './component/ListCompany';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/listCompany' element={<ListCompany />} />

      {/* <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login2' element={<Login2 />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/home' element={<App />} /> */}
    </Routes>
  </BrowserRouter>
);
