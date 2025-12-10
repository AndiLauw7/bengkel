// components/organisms/ServiceFeatureSection.tsx
import React, { FC } from "react";
import { Wrench, Gauge, Zap } from "lucide-react";
import Button from "../atoms/Button";
import ServiceCard from "../molecules/ServiceCard";

const servicesData = [
  {
    title: "Service Rutin & Tune Up",
    description:
      "Perawatan berkala, ganti oli, hingga setting karburator/injeksi ringan. Jaga performa motor harian Anda tetap prima.",
    icon: <Wrench size={32} />,
    link: "/services#tune-up",
  },
  {
    title: "Upgrade Performa (Bore Up & CVT)",
    description:
      "Kami ahlinya Bore Up, Porting/Polish, hingga Upgrade CVT. Tingkatkan akselerasi dan kecepatan motor Anda.",
    icon: <Gauge size={32} />,
    link: "/services#upgrade",
  },
  {
    title: "Service Injeksi & Kelistrikan",
    description:
      "Solusi akurat untuk masalah sistem injeksi, kelistrikan, dan diagnosis motor modern menggunakan alat canggih.",
    icon: <Zap size={32} />,
    link: "/services#injeksi",
  },
];

const ServiceFeatureSection: FC = () => {
  return (
    <section id="servis" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-3">
            Layanan Unggulan{" ANG'S"} MOTOR
          </h2>
          <p className="text-xl text-gray-400">
            Kami Melayani Semua Kebutuhan Motor Anda di Tangerang.
          </p>
        </div>

        {/* Grid Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        {/* CTA Lanjutan */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">
            Tidak menemukan layanan yang Anda cari?
          </p>
          <Button variant="secondary" href="/services" className="px-8 py-3">
            Lihat Semua Daftar Layanan Kami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureSection;
