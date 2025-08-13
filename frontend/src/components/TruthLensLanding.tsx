import React from "react";
import { useNavigate } from "react-router-dom";

export default function TruthLensLanding() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-24">
      <h1 className="text-5xl font-serif font-black mb-6 text-gray-900">Introducing TruthLens</h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
        Fact-checking, AI-powered, conversational analysis. Challenge claims, get context, see true sources.
      </p>
      <button
        onClick={() => navigate("/truthlens/try")}
        className="bg-black text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-900 mb-8"
      >
        Try TruthLens
      </button>
      {/* Add additional features or blurbs below as needed */}
    </section>
  );
}
