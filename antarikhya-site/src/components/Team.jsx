import React from "react";
import TEAM from "../data/team";

export default function Team() {
  return (
    <section id="team" className="section bg-black text-white" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl text-center">Core & Coordinators • 2025–26</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {TEAM.map((m, i) => (
            <div key={i} className="text-center" data-scroll data-scroll-speed="1">
              <img
                src={`/src/assets/images/team/${m.img}`}
                alt={m.name}
                className="team-avatar mx-auto"
                onError={(e)=> e.currentTarget.src = '/src/assets/images/placeholder.jpg'}
              />
              <div className="mt-3 text-white text-lg">{m.name}</div>
              <div className="text-sm text-gray-400">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
