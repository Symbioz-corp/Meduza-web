import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react'


const Home = lazy(() => import('./pages/informative/Home'))

export default function App() {

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense> <Home /></Suspense>}></Route>
      </Routes>
    </>
  )
}