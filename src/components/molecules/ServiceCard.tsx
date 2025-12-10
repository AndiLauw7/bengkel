// components/molecules/ServiceCard.tsx (Revisi)
import React, { FC } from 'react';
import Button from '../atoms/Button';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode; 
  link: string; // Properti link ditambahkan
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-red-600 transition duration-300 transform hover:scale-[1.02]">
      <div className="text-red-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 h-16 overflow-hidden">{description}</p>
      {/* Menggunakan link pada tombol */}
      <Button variant="primary" href={link} className="text-sm w-full mt-4">
        Detail Layanan
      </Button>
    </div>
  );
};

export default ServiceCard;