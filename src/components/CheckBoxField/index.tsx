import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface CheckBoxFieldProps<T extends FieldValues> {
    id: string;
    idForm: Path<T>
    label: string;
    value: string;
    register: UseFormRegister<T>;
}

export default function CheckBoxField<T extends FieldValues>({ id, idForm, register, label, value }: CheckBoxFieldProps<T>) {
    return (
        <div key={id} className="flex items-center">
            <input
                type="checkbox"
                id={id}
                value={value}  // Valor do checkbox que será salvo no array
                {...register(idForm)}  // Passa o name como interests.products para ser tratado como array
                className="mr-2"
            />
            <label htmlFor={id} className="text-sm text-gray-600">
                {label}
            </label>
        </div>
    );
}
