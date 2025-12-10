// components/organisms/HeroSection.tsx
import React, { FC } from "react";
import Button from "../atoms/Button";
import Image from "next/image";

type HeroSectionProps = {
  imageUrl: string; // Path ke gambar bengkel yang di-upload
  headline: string;
  subHeadline: string;
};

const HeroSection: FC<HeroSectionProps> = ({
  imageUrl,
  headline,
  subHeadline,
}) => {
  return (
    // <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
    <section
      id="beranda"
      className="relative min-h-[100vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Bengkel ANG'S MOTOR Tangerang"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      </div>

      <div className="relative z-20 text-center max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
          {headline}
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8">{subHeadline}</p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            variant="primary"
            href="#kontak"
            className="text-base sm:text-lg px-8 py-3"
          >
            Reservasi Service Sekarang!
          </Button>

          <Button
            variant="whatsapp"
            href="https://wa.me/6281933998880"
            className="text-base sm:text-lg px-8 py-3"
          >
            Hubungi Via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
