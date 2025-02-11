import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./style.css";

interface SelectFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  children: React.ReactNode;
  error?: string;
  isRequired?: boolean;
  register: UseFormRegister<T>;
}

export default function SelectField<T extends FieldValues>({
  id,
  label,
  children,
  error,
  isRequired = false,
  register
}: SelectFieldProps<T>) {
  return (
    <div className="container-inputs">
      <label htmlFor={String(id)} className="labelText">
        {label}{isRequired ? <span className="text-red-600" > *</span> : <span className="text-gray-400"> (opcional)</span>}
      </label>
      <select
        id={String(id)}
        className="input"
        {...register(id)} 
      >
        {children}
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}