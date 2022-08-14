import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Register from './Components/Auth/Register';
import { ContextProvider } from './Components/Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCreationForm from './Components/ProjectCategories/ProjectCreationForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-project" element={<ProjectCreationForm />} />
        </Routes>
      </BrowserRouter>
      
    </ContextProvider>
  </React.StrictMode>
);


