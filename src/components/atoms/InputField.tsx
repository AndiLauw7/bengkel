// components/atoms/InputField.tsx
import React, { FC } from "react";

type InputFieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "textarea" | "number";
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
};

const InputField: FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  className = "",
}) => {
  const baseStyle =
    "w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition duration-200";

  const InputComponent = type === "textarea" ? "textarea" : "input";

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <InputComponent
        id={id}
        name={id}
        type={type !== "textarea" ? type : undefined}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`${baseStyle} ${
          type === "textarea" ? "h-24 resize-none" : ""
        }`}
        rows={type === "textarea" ? 4 : undefined}
      />
    </div>
  );
};

export default InputField;
