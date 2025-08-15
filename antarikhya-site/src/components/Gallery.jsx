import React from "react";

const images = [
  "/src/assets/images/gallery/1.jpg",
  "/src/assets/images/gallery/2.jpg",
  "/src/assets/images/gallery/3.jpg",
  "/src/assets/images/gallery/4.jpg",
  "/src/assets/images/gallery/5.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-black text-white" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl text-center">Gallery</h2>
        <div className="mt-10 overflow-x-auto hide-scrollbar">
          <div className="flex gap-4">
            {images.map((src, i) => (
              <div key={i} className="w-[80vw] md:w-[40vw] lg:w-[30vw] h-[60vh] overflow-hidden rounded">
                <img src={src} alt={`gallery-${i}`} className="full-bleed" onError={(e)=> e.currentTarget.src = '/src/assets/images/placeholder.jpg'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
