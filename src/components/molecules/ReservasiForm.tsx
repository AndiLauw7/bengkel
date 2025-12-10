// components/molecules/ReservationForm.tsx
"use client";
import React, { FC, useState } from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

// Definisi tipe untuk data form
interface FormData {
  name: string;
  phone: string;
  motorType: string;
  serviceDate: string;
  notes: string;
}

const ReservationForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    motorType: "",
    serviceDate: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // --- LOGIKA SUBMIT (Placeholder) ---
    console.log("Reservasi Dikirim:", formData);

    // Simulasikan API call/pengiriman data
    setTimeout(() => {
      setIsSubmitting(false);

      // Di dunia nyata, Anda akan mengirim ke backend atau layanan seperti Google Forms/Airtable
      setMessage({
        type: "success",
        text: "Reservasi Anda Berhasil! Tim kami akan segera menghubungi Anda untuk konfirmasi.",
      });
      // Reset form
      setFormData({
        name: "",
        phone: "",
        motorType: "",
        serviceDate: "",
        notes: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl border border-red-600/50 w-full">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Pesan Jadwal Service Cepat
      </h3>

      {message && (
        <div
          className={`p-3 mb-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-500/20 text-green-300"
              : "bg-red-500/20 text-red-300"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <InputField
          id="name"
          label="Nama Lengkap"
          type="text"
          placeholder="Masukkan nama Anda"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          id="phone"
          label="Nomor Telepon (WA)"
          type="tel"
          placeholder="Contoh: 6281933998880"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <InputField
          id="motorType"
          label="Tipe Motor & Tahun"
          type="text"
          placeholder="Contoh: Honda Vario 150 - 2018"
          required
          value={formData.motorType}
          onChange={handleChange}
        />

        <InputField
          id="serviceDate"
          label="Tanggal & Waktu Service"
          type="date"
          required
          value={formData.serviceDate}
          onChange={handleChange}
        />

        <InputField
          id="notes"
          label="Keterangan Tambahan (Opsional)"
          type="textarea"
          placeholder="Contoh: Fokus periksa CVT dan Ganti Oli."
          value={formData.notes}
          onChange={handleChange}
        />

        <Button
          variant="primary"
          type="button"
          className="w-full mt-6 text-lg py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Mengirim Reservasi..." : "Kirim Reservasi Sekarang"}
        </Button>
      </form>
    </div>
  );
};

export default ReservationForm;
