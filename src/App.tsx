import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollTop from "./utils/ScrollTop";
import ErrorModal from "./components/modals/errorModal";
import SuccessModal from "./components/modals/successModal";

const Home = lazy(() => import("./pages/general/Home"));
const Signin = lazy(() => import("./pages/authentication/Signin"));
const Signup = lazy(() => import("./pages/authentication/Signup"));
const About = lazy(() => import("./pages/general/About"));
const Blog = lazy(() => import("./pages/general/Blog"));
const ClientSpace = lazy(() => import("./pages/general/ClientSpace"));
const Partenariat = lazy(() => import("./pages/general/Partenariat"));

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  return (
    <>
      <ScrollTop />
      <ErrorModal />
      <SuccessModal />
      <Routes>
        <Route path="/" element={<Suspense>{" "}<Home /></Suspense>}></Route>
        <Route path="/sign-in" element={<Suspense>{" "}<Signin /></Suspense>}></Route>
        <Route path="/sign-up" element={<Suspense>{" "}<Signup /></Suspense>}></Route>
        <Route path="/about" element={<Suspense>{" "}<About /></Suspense>}></Route>
        <Route path="/blog" element={<Suspense>{" "}<Blog /></Suspense>}></Route>
        <Route path="/partenariat" element={<Suspense>{" "}<Partenariat /></Suspense>}></Route>
        <Route path="/clientSpace" element={<Suspense>{" "}<ClientSpace /></Suspense>}></Route>

      </Routes>
    </>
  );
}
