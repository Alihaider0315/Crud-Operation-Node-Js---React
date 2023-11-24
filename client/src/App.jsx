import React from 'react';
import Router from './Router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Router/>
      <ToastContainer/>
    </div>
  )
}

export default App
