import React from "react";
import { BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIAnalyzerLanding() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      <div className="text-center">
        <div className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          Product Highlight
        </div>
        <h1 className="text-5xl font-serif font-black mb-6 text-gray-900">
          Meet AI Analyzer
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          AI Analyzer auto-reviews and breaks down articles, highlighting bias, sentiment, claim strength, and opinion vs. fact—all using explainable AI.
        </p>
        <button
          onClick={() => navigate("/ai-analyzer/try")}
          className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all mb-6"
        >
          Try AI Analyzer
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <AiFeature iconColor="orange" title="Instant Analysis" desc="Reads any article and gives you a veracity and bias breakdown instantly." />
        <AiFeature iconColor="teal" title="Visualized Results" desc="Graphs, scores, and detailed highlights so you see what's objective and what isn't." />
        <AiFeature iconColor="indigo" title="Transparent AI" desc="Explains exactly how it reaches its conclusions about each claim or section." />
      </div>
    </section>
  );
}

function AiFeature({ iconColor, title, desc }: { iconColor: string; title: string; desc: string }) {
  // For Tailwind compatibility with dynamic color, you may need to import cx or list colors statically
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <BarChart3 className={`w-10 h-10 mb-2`} style={{ color: iconColor }} />
      <div className="font-semibold mt-1 text-lg">{title}</div>
      <div className="text-gray-500 mt-1 text-sm">{desc}</div>
    </div>
  );
}
