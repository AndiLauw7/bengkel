// components/atoms/Logo.tsx
import React, { FC } from "react";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-extrabold text-blue-400 tracking-wider hover:text-blue-300 transition duration-200"
    >
      {"ANG'S"} <span className="text-white">MOTOR</span>
    </Link>
  );
};

export default Logo;
