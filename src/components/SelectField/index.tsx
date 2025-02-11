import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./style.css";

interface SelectFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  children: React.ReactNode;
  error?: string;
  register: UseFormRegister<T>;

}

export default function SelectField<T extends FieldValues>({
  id,
  label,
  children,
  error,
  register
}: SelectFieldProps<T>) {
  return (
    <div className="container-inputs">
      <label htmlFor={String(id)} className="labelText">
        {label}
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