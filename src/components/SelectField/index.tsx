import React from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import "./style.css";

interface SelectFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  children: React.ReactNode;
  validation?: object;
}

export default function SelectField<T extends FieldValues>({
  id,
  label,
  children,
  validation,
}: SelectFieldProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <div className="container-inputs">
      <label htmlFor={String(id)} className="labelText">
        {label}
      </label>
      <select
        id={String(id)}
        className="input"
        {...register(id, validation)}
      >
        {children}
      </select>
      {errors[id] && <p className="text-red-500 text-xs">{String(errors[id]?.message)}</p>}
    </div>
  );
}