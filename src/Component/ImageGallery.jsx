import React from 'react';

const images = [
  {
    src: 'https://imgs.search.brave.com/pxS4d1yRzLxjvTvZiCwgIAtO7OsulWAKer32X5_a-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Ymx1ZS1mb3JtYWwt/c3VpdC11cmJhbi1i/dXNpbmVzc21hbi5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w',
    caption: 'Awarded Best LIC Advisor – 2023',
  },
  {
    src: 'https://imgs.search.brave.com/pxS4d1yRzLxjvTvZiCwgIAtO7OsulWAKer32X5_a-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Ymx1ZS1mb3JtYWwt/c3VpdC11cmJhbi1i/dXNpbmVzc21hbi5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w',
    caption: 'Happy Family after Policy Signup',
  },
  {
    src: 'https://imgs.search.brave.com/pxS4d1yRzLxjvTvZiCwgIAtO7OsulWAKer32X5_a-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Ymx1ZS1mb3JtYWwt/c3VpdC11cmJhbi1i/dXNpbmVzc21hbi5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w',
    caption: 'Policy Awareness Event – Pune',
  },
  {
    src: 'https://imgs.search.brave.com/pxS4d1yRzLxjvTvZiCwgIAtO7OsulWAKer32X5_a-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Ymx1ZS1mb3JtYWwt/c3VpdC11cmJhbi1i/dXNpbmVzc21hbi5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w',
    caption: 'Recognition from Senior LIC Officials',
  },
  {
    src: 'https://imgs.search.brave.com/pxS4d1yRzLxjvTvZiCwgIAtO7OsulWAKer32X5_a-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Ymx1ZS1mb3JtYWwt/c3VpdC11cmJhbi1i/dXNpbmVzc21hbi5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w',
    caption: 'Grateful Client – Claim Settlement Support',
  },
];

const ImageGallery = () => {
  return (
    <section className="bg-white py-0 px-4 sm:px-6 lg:px-8">
      

      <div className="overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 min-w-max px-2 md:px-4">
          {images.map((img, index) => (
            <div
              key={index}
             className="relative w-64 sm:w-72 flex-shrink-0 overflow-hidden shadow-lg group transform transition duration-300 hover:scale-105 rounded-md"

            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white px-4 py-2 text-sm sm:text-base font-medium">

                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            height: 10px;
          }
          .hide-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .hide-scrollbar::-webkit-scrollbar-thumb {
            background-color: #4B5563;
            border-radius: 9999px;
            border: 3px solid transparent;
            background-clip: content-box;
          }
        `}
      </style>
    </section>
  );
};

export default ImageGallery;
