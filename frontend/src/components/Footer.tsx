import React from "react";
export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-gray-200 bg-white text-gray-600 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          © 2025 <span className="font-semibold">IndiaUnfiltered</span>. All rights reserved.
        </div>
        <nav className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
