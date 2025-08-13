import React, { useState } from "react";

export default function AIAnalyzerTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setResult(`Analyzing "${input}"...\n\nKey claims, bias and analysis will appear here (mocked).`);
  }

  return (
    <div className="min-h-screen bg-[#212121] text-white flex">
      <aside className="w-64 bg-black/20 p-4">
        <h2 className="font-bold text-lg mt-10">AI Analyzer</h2>
      </aside>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-xl w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-300 mb-8 text-center">Article Analyzer</h1>
          <form onSubmit={handleAnalyze} className="flex mb-6">
            <input
              type="url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste article URL here..."
              className="flex-1 px-4 py-3 rounded-l bg-gray-900 border-transparent focus:outline-none"
            />
            <button
              className="bg-blue-600 rounded-r px-6 py-2 font-semibold hover:bg-blue-700"
              type="submit"
            >
              Analyze
            </button>
          </form>
          <div className="bg-gray-800 rounded p-4 min-h-[10rem] whitespace-pre-wrap">
            {result ? (
              <pre>{result}</pre>
            ) : (
              <p className="text-gray-400">Paste a news/blog article URL to analyze.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
