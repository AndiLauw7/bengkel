import React, { FC } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Logo from "../atoms/Logo";

const Footer: FC = () => {
  // Data Kontak & Alamat Perusahaan
  const companyName = "ANG'S MOTOR Tangerang";
  const addressText =
    "ANG'S MOTOR Tangerang, Kp. Pagedangan RT 001/RW 001 desa. Cicalengka kec. Pagedangan, Kabupaten Tangerang, Provinsi Banten";
  const mapsQuery =
    "ANG'S MOTOR Tangerang, Kp. Pagedangan RT 001/RW 001 desa. Cicalengka kec. Pagedangan, Kabupaten Tangerang, Provinsi Banten";
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsQuery
  )}`;
  const phoneNumber = "6281933998880";
  const phoneHref = `tel:${phoneNumber.replace(/-/g, "")}`;
  const emailAddress = "info@angsmotor.com";
  const emailHref = `mailto:${emailAddress}`;

  // Tautan Navigasi Cepat
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Semua Layanan", href: "/services" },
    { name: "Galeri & Testimoni", href: "/gallery" },
    { name: "Hubungi Kami", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700/50 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Kolom 1: Logo & Deskripsi Singkat */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Bengkel Spesialis Performa & Service Rutin Motor Injeksi/Karbu di
              Tangerang.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="text-white font-bold mb-4">Tautan Cepat</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition duration-200 text-sm mb-2 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-4">Kontak & Lokasi Kami</h4>
            <div className="space-y-4">
              {/* Alamat + Google Maps Link */}
              <div className="flex items-start">
                <MapPin
                  size={18}
                  className="text-red-500 mr-3 flex-shrink-0 mt-1"
                />
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm"
                >
                  {addressText}{" "}
                  {/* <span className="underline font-medium block">
                    (Klik untuk ke Google Maps)
                  </span> */}
                </a>
              </div>

              {/* Telepon */}
              <p className="flex items-center text-gray-400 text-sm">
                <Phone size={18} className="text-red-500 mr-3 flex-shrink-0" />
                <a
                  href={phoneHref}
                  className="hover:text-red-500 transition duration-200"
                >
                  {phoneNumber} (Call/WhatsApp)
                </a>
              </p>

              {/* Email */}
              <p className="flex items-center text-gray-400 text-sm">
                <Mail size={18} className="text-red-500 mr-3 flex-shrink-0" />
                <a
                  href={emailHref}
                  className="hover:text-red-500 transition duration-200"
                >
                  {emailAddress}
                </a>
              </p>

              {/* Media Sosial */}
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition duration-200"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition duration-200"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700/50 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
