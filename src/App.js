import React from "react";
import "./index.css";
// Hapus import react-router-dom karena tidak dipakai lagi untuk routing halaman
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainLayout from "./components/layout/MainLayout";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* MainLayout sekarang membungkus seluruh konten */}
        <MainLayout>
          <Home />
          <About />
          <Projects />
          <Contact />
        </MainLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;