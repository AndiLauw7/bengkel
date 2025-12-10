import React, { FC } from "react";
import Image from "next/image";

type GalleryItemProps = {
  src: string;
  alt: string;
  caption: string;
};

const GalleryItem: FC<GalleryItemProps> = ({ src, alt, caption }) => {
  return (
    <div className="group overflow-hidden rounded-xl shadow-lg border border-gray-700 hover:border-red-500 transition duration-300 cursor-pointer">
      <div className="relative w-full h-64">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 bg-gray-800">
        <p className="text-sm font-medium text-white truncate">{caption}</p>
        <span className="text-xs text-red-400">Lihat Detail</span>
      </div>
    </div>
  );
};

export default GalleryItem;
