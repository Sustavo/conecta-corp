import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import CheckBoxField from "../CheckBoxField";

interface CheckBoxFormProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    error?: string;
    isRequired: boolean;
    label: string;
    checkBoxValues: {
        id: string;
        idForm: Path<T>;
        label: string;
        value: string;
    }[]
}

export default function CheckBoxForm<T extends FieldValues>({ register, error, isRequired = false, label, checkBoxValues }: CheckBoxFormProps<T>) {
    return (
        <div className="mb-6">
            <label className="labelText">{label}{isRequired ? <span className="text-red-600" > *</span> : <span className="text-gray-400"> (opcional)</span>}</label>
            <div className="space-y-2">
                {checkBoxValues.map(({ id, idForm, label, value }) => (
                    <CheckBoxField
                        id={id}
                        idForm={idForm}
                        label={label}
                        value={value}
                        register={register}
                    />
                ))}
                {error && (
                    <p className="text-red-500 text-xs">{error}</p>
                )}
            </div>
        </div>
    )
}