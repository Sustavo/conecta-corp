import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./style.css";

interface InputFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  register: UseFormRegister<T>;
}

export default function InputField<T extends FieldValues>({
  id,
  label,
  type = "text",
  placeholder,
  error,
  isRequired = false,
  register, // Receba o register como prop
}: InputFieldProps<T>) {

  return (
    <div className="container-inputs">
      <label htmlFor={String(id)} className="labelText">
        {label}{isRequired ? <span className="text-red-600" > *</span> : <span className="text-gray-400"> (opcional)</span>}
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