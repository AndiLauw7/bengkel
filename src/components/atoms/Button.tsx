// components/atoms/Button.tsx
import Link from "next/link";
import React, { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "whatsapp";
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  className = "",
  href,
  type,
  disabled,
}) => {
  const baseStyle =
    "px-4 py-2 text-sm font-semibold rounded-lg transition duration-300";

  const styles = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-md", // CTA Utama
    secondary:
      "bg-transparent text-white border border-white hover:bg-white hover:text-gray-900",
    whatsapp: "bg-green-500 text-white hover:bg-green-600",
  };

  const Component = href ? Link : "button";

  return (
    <Component
      href={href || "#"}
      className={`${baseStyle} ${styles[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Component>
  );
};

export default Button;
