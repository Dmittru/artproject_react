import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/pages/LandingPage";
import NavHeader from "./components/UI/NavHeader/NavHeader";
import ProjectsPage from "./components/pages/ProjectsPage";
import CoursesPage from "./components/pages/CoursesPage";
import GalleryPage from "./components/pages/GalleryPage";
import Page404 from "./components/pages/Page404";
import Footer from "./components/UI/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTop/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <NavHeader/>
            <ScrollToTopButton/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/courses" element={<CoursesPage/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
