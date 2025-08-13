import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { navConfig } from "../Data/navConfig";

function formatDateLong(d: Date) {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const topicsOrder = [
  "India",
  "International",
  "Tech and AI",
  "Business",
  "Sports",
  "TruthLens",
  "AI Analyzer",
];

export default function AppHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const today = new Date();

  const goToSection = (section: string, hasSubsections: boolean) => {
    if (!hasSubsections) {
      // Special case: go to landing for TruthLens or AI Analyzer
      if (section === "TruthLens") {
        navigate("/section/truthlens");
      } else if (section === "AI Analyzer") {
        navigate("/section/ai-analyzer");
      } else {
        navigate(`/section/${section.toLowerCase().replace(/\s+/g, "-")}`);
      }
      setActiveMenu(null);
    }
  };

  const goToSubsection = (section: string, subsection: string) => {
    setActiveMenu(null);
    navigate(
      `/section/${section.toLowerCase().replace(/\s+/g, "-")}/${subsection
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50 select-none">
      {/* Top Row (Date, Paper, Nifty) */}
      <div className="flex justify-between items-center text-[15px] py-2 px-6 bg-gray-50 border-b border-gray-200">
        <span className="text-gray-800">{formatDateLong(today)}</span>
        <span className="text-gray-600">Today's Paper</span>
        <span className="text-green-700 font-medium">
          NIFTY 50 <span className="text-green-600">+0.61% ↑</span>
        </span>
      </div>

      {/* Logo/Site Name centered */}
      <div className="w-full flex justify-center pt-6 pb-2">
        <button
          onClick={() => navigate("/")}
          className="font-serif text-4xl font-extrabold tracking-tight text-gray-900 focus:outline-none"
          aria-label="Go to homepage"
        >
          IndianUnscripted
        </button>
      </div>

      {/* Navigation Row */}
      <nav className="flex justify-center gap-5 xl:gap-8 items-center px-4 py-2 font-semibold text-base xl:text-lg border-b">
        {topicsOrder.map((section) => {
          const cfg = navConfig[section];
          const hasSubsections = !!(cfg && cfg.subsections && cfg.subsections.length > 0);
          return (
            <div
              key={section}
              className="relative"
              onMouseEnter={() => hasSubsections && setActiveMenu(section)}
              onMouseLeave={() => hasSubsections && setActiveMenu(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-blue-800 transition-all px-3 py-2 whitespace-nowrap"
                onClick={() => goToSection(section, hasSubsections)}
                aria-haspopup={hasSubsections ? "true" : undefined}
                aria-expanded={activeMenu === section}
                type="button"
                tabIndex={0}
              >
                {section}
                {hasSubsections && <ChevronDown size={16} />}
              </button>
              {hasSubsections && activeMenu === section && (
                <div
                  className="absolute left-0 top-full mt-1 min-w-[210px] bg-white shadow-lg rounded border z-50"
                  role="menu"
                  aria-label={`${section} subsections`}
                >
                  {cfg.subsections.map((sub) => (
                    <button
                      key={sub}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition whitespace-nowrap"
                      onClick={() => goToSubsection(section, sub)}
                      role="menuitem"
                      type="button"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
