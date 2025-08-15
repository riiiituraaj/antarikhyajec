import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-white font-display tracking-widest text-sm">ANTARIKHYA</a>
        <nav className="space-x-6 text-sm text-gray-300 hidden md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#events" className="hover:text-white">Events</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#governance" className="hover:text-white">Governance</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
