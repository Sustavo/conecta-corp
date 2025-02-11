import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./style.css";

interface InputFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<T>;
}

export default function InputField<T extends FieldValues>({
  id,
  label,
  type = "text",
  placeholder,
  error,
  register, // Receba o register como prop
}: InputFieldProps<T>) {

  return (
    <div className="container-inputs">
      <label htmlFor={String(id)} className="labelText">
        {label}
      </label>
      <input
        id={String(id)}
        type={type}
        placeholder={placeholder}
        className="input"
        {...register(id)} // Repasse as propriedades do register
      />
      {error?.trim() && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}