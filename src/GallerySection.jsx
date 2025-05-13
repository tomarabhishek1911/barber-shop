import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-[#111] py-16 px-4 text-white text-center">
      <h4 className="text-yellow-500 text-sm font-semibold">Our Work & Shop</h4>
      <h2 className="text-4xl font-bold mt-2">
        Our <span className="text-white">Barbershop Gallery</span>
        <div className="h-1 bg-yellow-500 w-16 mx-auto mt-2 transition-all duration-300"></div>
      </h2>
      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`gallery-${idx}`}
            className="rounded-xl cursor-pointer hover:ring-4 hover:ring-yellow-500 transition"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative max-w-4xl w-full">
            <button className="absolute top-2 right-2 text-white" onClick={() => setSelectedImage(null)}>
              <X size={30} />
            </button>
            <img src={selectedImage} alt="enlarged" className="w-full h-auto rounded-xl" />
          </div>
        </Dialog>
      )}
    </section>
  );
}