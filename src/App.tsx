import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react'


const Home = lazy(() => import('./pages/general/Home'))
const Signin = lazy(() => import('./pages/general/Signin'))
const Signup = lazy(() => import('./pages/general/Signup'))

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
        <Route path="/sign-in" element={<Suspense> <Signin /></Suspense>}></Route>
        <Route path="/sign-up" element={<Suspense> <Signup /></Suspense>}></Route>
      </Routes>
    </>
  )
}