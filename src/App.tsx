import React from "react"
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import FAQ from "./components/home/FAQ"
import Footer from "./components/home/footer"
import Hero from "./components/home/hero"
import ImageXL from "./components/home/ImageXL"
import Pricing from "./components/home/prix"

export default function App() {

  return (
    <>
      <Hero />
      <Pricing />
      <ImageXL />
      <FAQ />
      <Footer />
    </>
  )
}

