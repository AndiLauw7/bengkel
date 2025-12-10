"use client";
import React, { FC } from "react";
import Link from "next/link";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import { Menu, X } from "lucide-react"; // Import ikon untuk mobile

const navItems = [
  { name: "Layanan", href: "/services" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Galeri", href: "/gallery" },
  { name: "Kontak", href: "/contact" },
];

const NavigationBar: FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="flex justify-between items-center py-4">
      <Logo />

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-red-500 transition duration-200 text-sm"
          >
            {item.name}
          </Link>
        ))}
        <Button variant="primary" href="/reservasi">
          Reservasi Service
        </Button>
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 p-4 z-50 md:hidden shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-500 py-2 border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="primary"
              href="/reservasi"
              className="mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              Reservasi Service
            </Button>
            <Button
              variant="whatsapp"
              href="https://wa.me/62 819-3399-8880"
              className="w-full"
            >
              Hubungi via WhatsApp
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
