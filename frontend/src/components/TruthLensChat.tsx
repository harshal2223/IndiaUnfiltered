import React, { useState } from "react";

export default function TruthLensChat({ setPage }: { setPage: (page: string) => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setHistory([...history, `You: ${input}`, `TruthLens: Claim checked (“${input}”)!`]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white flex">
      <aside className="w-64 bg-black/20 p-4">
        <button
          className="w-full bg-black text-white py-3 rounded-lg font-semibold mb-3 hover:bg-gray-800"
          onClick={() => setPage('home')}
        >
          &larr; Back to Home
        </button>
        <h2 className="font-bold text-lg mt-10">TruthLens Chat</h2>
      </aside>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-300 mb-8 text-center">TruthLens</h1>
          <form onSubmit={handleSubmit} className="flex mb-6">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Paste a claim or statement here..."
              className="flex-1 px-4 py-3 rounded-l bg-gray-900 border-transparent focus:outline-none"
            />
            <button className="bg-blue-600 rounded-r px-6 py-2 font-semibold hover:bg-blue-700" type="submit">
              Check
            </button>
          </form>
          <div className="bg-gray-800 rounded p-4 h-80 overflow-y-auto">
            {history.map((msg, i) => (
              <div key={i} className="mb-2">{msg}</div>
            ))}
            {!history.length && <p className="text-gray-400">Ask TruthLens to fact check anything!</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
