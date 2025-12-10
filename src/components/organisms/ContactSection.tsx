// components/organisms/ContactSection.tsx
import React, { FC } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import ReservationForm from "../molecules/ReservasiForm";

const ContactSection: FC = () => {
  // Data Kontak
  const addressText =
    "Kp. Pagedangan RT 001/RW 001 desa. Cicalengka kec. Pagedangan, Kabupaten Tangerang, Provinsi Banten";
  const mapsQuery =
    "ANG'S MOTOR Bengkel, Kp. Pagedangan RT 001/RW 001 desa. Cicalengka kec. Pagedangan, Kabupaten Tangerang, Provinsi Banten";
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsQuery
  )}`;
  const phoneNumber = "6281933998880";
  const phoneHref = `tel:${phoneNumber.replace(/-/g, "")}`;
  const operatingHours = "Senin - Sabtu: 08.00 - 17.00 WIB";
  const mapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7247373000414!2d106.60744127316855!3d-6.2998550616529165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd00681838f9%3A0x95bfa96e7cfdf235!2sANG'S%20MOTOR%20TANGERANG!5e0!3m2!1sid!2sid!4v1765380897444!5m2!1sid!2sid";
  return (
    <section className="py-20 bg-gray-900" id="kontak">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-3">
            Hubungi Kami & Pesan Jadwal Anda
          </h2>
          <p className="text-xl text-gray-400">
            Kami siap membantu Anda. Isi formulir atau hubungi kami langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">
              {" ANG'S"} MOTOR Tangerang
            </h3>

            <div className="space-y-6">
              {/* Alamat */}
              <div className="flex items-start">
                <MapPin
                  size={24}
                  className="text-red-500 mr-4 flex-shrink-0 mt-1"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Lokasi Kami
                  </h4>
                  {/* <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition duration-200"
                  >
                    {addressText}{" "}
                    <span className="underline font-medium block">
                      (Klik untuk ke Google Maps)
                    </span>
                  </a> */}
                  <p className="text-white">
                    {"ANG'S"} MOTOR Tangerang, Kp. Pagedangan RT 001/RW 001
                    desa. Cicalengka kec. Pagedangan, Kabupaten Tangerang,
                    Provinsi Banten
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start">
                <Phone
                  size={24}
                  className="text-red-500 mr-4 flex-shrink-0 mt-1"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Telepon & WhatsApp
                  </h4>
                  <a
                    href={phoneHref}
                    className="text-gray-400 hover:text-red-500 transition duration-200"
                  >
                    {phoneNumber} (Fast Response)
                  </a>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start">
                <Clock
                  size={24}
                  className="text-red-500 mr-4 flex-shrink-0 mt-1"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Jam Operasional
                  </h4>
                  <p className="text-gray-400">{operatingHours}</p>
                  <p className="text-gray-400 font-bold">Minggu: Tutup</p>
                </div>
              </div>
            </div>

            {/* Peta Placeholder (Jika ingin menambahkan iframe peta) */}
            <div className="mt-8 bg-gray-700 h-64 rounded-lg overflow-hidden">
              <div className="mt-8 bg-gray-700 h-96 rounded-lg overflow-hidden">
                <iframe
                  src={mapsEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi ANG'S MOTOR"
                ></iframe>
              </div>
              {/* Di sini Anda bisa menempatkan iframe Google Maps, contoh: */}
              {/* <iframe src="URL EMBED MAPS" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe> */}
              <div className="flex items-center justify-center h-full text-gray-400">
                Slot Peta Google Maps Interaktif
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Reservasi */}
          <div className="flex items-center w-full">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
