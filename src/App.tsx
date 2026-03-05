import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";

import { Home } from "./pages/Home";
import { Experiences } from "./pages/Experience";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}