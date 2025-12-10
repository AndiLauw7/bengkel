// components/organisms/GallerySection.tsx
"use client";
import React, { FC, useState } from "react";
import Button from "../atoms/Button";
import GalleryItem from "../molecules/GaleriItems";

// Data Dummy Galeri (Ganti dengan data Anda yang sebenarnya)
const galleryData = [
  {
    src: "/image1.jpeg",
    alt: "Upgrade CVT Vario",
    caption: "Upgrade CVT Harian Honda Vario 150",
    category: "upgrade",
  },
  {
    src: "/image2.jpeg",
    alt: "Tune Up Mesin",
    caption: "Tune Up Mesin Rutin Yamaha NMAX",
    category: "service",
  },
  {
    src: "/image3.jpeg",
    alt: "Pengerjaan Bore Up",
    caption: "Pemasangan Kit Bore Up Satria FU",
    category: "upgrade",
  },
  {
    src: "/image4.jpeg",
    alt: "Service Injeksi",
    caption: "Pembersihan Injektor Motor Sport",
    category: "injeksi",
  },
  {
    src: "/image5.jpeg",
    alt: "Workshop Bengkel",
    caption: "Peralatan Canggih di Workshop Kami",
    category: "fasilitas",
  },
];

const filters = [
  { key: "all", label: "Semua" },
  { key: "upgrade", label: "Upgrade Performa" },
  { key: "service", label: "Service Rutin" },
  { key: "injeksi", label: "Injeksi & Kelistrikan" },
  { key: "modifikasi", label: "Modifikasi" },
  { key: "fasilitas", label: "Fasilitas Bengkel" },
];

const GallerySection: FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = galleryData.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter
  );

  return (
    <section className="py-8 bg-gray-900" id="galeri">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-white mb-3">
            Galeri Hasil Kerja & Workshop
          </h2>
          <p className="text-xl text-gray-400">
            Lihat Bukti Kualitas Pengerjaan dari {" ANG'S"} MOTOR.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "primary" : "secondary"}
              onClick={() => setActiveFilter(filter.key)}
              className={`mb-2 ${
                activeFilter === filter.key
                  ? "border-red-500"
                  : "border-gray-600 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <GalleryItem
                key={index}
                src={item.src}
                alt={item.alt}
                caption={item.caption}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400 text-lg">
              Belum ada foto di kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
