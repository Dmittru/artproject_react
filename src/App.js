import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/pages/LandingPage";
import NavHeader from "./components/UI/NavHeader/NavHeader";

function App() {
    return (
        <BrowserRouter>
            <NavHeader/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
