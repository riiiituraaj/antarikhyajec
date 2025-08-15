import React from "react";

const EVENTS = [
  { title: "Stargazing Night", desc: "Telescope session and constellation walkthrough.", img: "/src/assets/images/events/stargazing.jpg" },
  { title: "Astrophotography Workshop", desc: "Hands-on basics with guidance from the team.", img: "/src/assets/images/events/workshop.jpg" },
  { title: "Outreach & Talks", desc: "Guest lecture series with Q&A.", img: "/src/assets/images/events/outreach.jpg" },
];

export default function Events() {
  return (
    <section id="events" className="section bg-white text-black" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl text-center">Events</h2>
        <div className="mt-12 space-y-20">
          {EVENTS.map((ev, i) => (
            <div key={i} className={`grid items-center gap-6 ${i % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:flex-row-reverse'}`}>
              <div className="w-full h-72 overflow-hidden">
                <img src={ev.img} alt={ev.title} className="full-bleed" onError={(e)=> e.currentTarget.src = '/src/assets/images/placeholder.jpg'} />
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-semibold">{ev.title}</h3>
                <p className="mt-3 text-gray-700">{ev.desc}</p>
                <p className="mt-3 text-sm text-gray-500">Date: TBD • Venue: JEC Grounds</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
