import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import HomePage from "./components/HomePage";
import SectionPage from "./components/SectionPage";
import TruthLensLanding from "./pages/TruthLensLanding";
import AIAnalyzerLanding from "./pages/AIAnalyzerLanding";
import TruthLensTool from "./pages/TruthLensTool";
import AIAnalyzerTool from "./pages/AIAnalyzerTool";

export default function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section/:section" element={<SectionPage />} />
        <Route path="/section/:section/:subsection" element={<SectionPage />} />

        {/* Landing pages for tools */}
        <Route path="/section/truthlens" element={<TruthLensLanding />} />
        <Route path="/section/ai-analyzer" element={<AIAnalyzerLanding />} />

        {/* Direct tool UI pages */}
        <Route path="/truthlens/try" element={<TruthLensTool />} />
        <Route path="/ai-analyzer/try" element={<AIAnalyzerTool />} />
      </Routes>
    </Router>
  );
}
