import { useState } from "react";

interface Image {
  id: number;
  src: string;
  alt: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      alt: "아기 사진 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503454537688-e0e3e7491e91?w=400&h=300&fit=crop",
      alt: "아기 사진 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=50",
      alt: "아기 사진 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1503454537688-e0e3e7491e91?w=400&h=300&fit=crop&q=50",
      alt: "아기 사진 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=40",
      alt: "아기 사진 5",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1503454537688-e0e3e7491e91?w=400&h=300&fit=crop&q=40",
      alt: "아기 사진 6",
    },
  ];

  return (
    <section className="container-section bg-korean-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-korean-navy">
          아기 성장 앨범
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
