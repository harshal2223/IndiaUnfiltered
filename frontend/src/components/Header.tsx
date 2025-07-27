import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(now.toLocaleDateString('en-US', options));
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Section */}
      <div className="py-4 border-b hairline-border">
        <div className="flex justify-between items-center">
          {/* Left: Date and Today's Paper */}
          <div className="text-xs text-gray-600">
            <p className="font-semibold">{currentDate}</p>
            <a href="#" className="hover:underline">Today's Paper</a>
          </div>
          
          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-black">
              India Unfiltered
            </a>
          </div>
          
          {/* Right: Subscribe and Login */}
          <div className="flex items-center space-x-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-md transition-colors duration-300 hidden sm:block">
              Subscribe
            </a>
            <a href="#" className="font-semibold text-sm hover:text-blue-600">
              Log In
            </a>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b hairline-border">
        <div className="py-2">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center items-center gap-x-6 text-sm font-semibold text-gray-700">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onCategoryChange(category)}
                  className={`hover:text-black transition-colors py-2 ${
                    selectedCategory === category ? 'text-black border-b-2 border-black' : ''
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
            <li>
              <a href="#" className="hover:text-cyan-600 transition-colors py-2">TruthLens</a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors py-2">AI Analyzer</a>
            </li>
          </ul>
          
          {/* Desktop Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="hidden md:block absolute top-2 right-0 w-64 px-4 py-1 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
            />
            <Search className="hidden md:block absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </nav>
      
      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden py-4 border-b hairline-border">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      )}
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-b hairline-border">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    onCategoryChange(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedCategory === category ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;