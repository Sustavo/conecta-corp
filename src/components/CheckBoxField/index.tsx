import { FieldValues, Path, useFormContext } from "react-hook-form";

interface CheckBoxFieldProps<T extends FieldValues> {
    id: Path<T>;
    label: string;
    validation?: object;
}

export default function CheckBoxField<T extends FieldValues>({ id, validation, label }: CheckBoxFieldProps<T>) {
    const { register } = useFormContext<T>();

    return (
        <div key={id} className="flex items-center">
            <input
                type="checkbox"
                id={id}
                className="mr-2"
                {...register(id, validation)}
            />
            <label htmlFor={id} className="text-sm text-gray-600">
                {label}
            </label>
        </div>
    );
}