import { useFormContext } from 'react-hook-form';
import { StepOneFormData } from '../../../@types/StepTypes/StepOneFormData';
import "../step.css";

export function StepOne() {
    const {
        register,
        formState: { errors },
    } = useFormContext<StepOneFormData>();

    const validateAge = (value: string) => {
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 18 || "Você precisa ser maior de 18 anos.";
    };

    return (
        <div className="step-content">
            <div className="container-inputs">
                <label htmlFor="fullName" className="labelText">Nome Completo</label>
                <input
                    id="fullName"
                    type="text"
                    placeholder="Digite seu nome completo"
                    className="input"
                    {...register("fullName", { required: "Nome completo é obrigatório" })}
                />
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
            </div>

            <div className="container-inputs">
                <label htmlFor="birthDate" className="labelText">Data de Nascimento</label>
                <input
                    id="birthDate"
                    type="date"
                    className="input"
                    {...register("birthDate", {
                        required: "Data de nascimento é obrigatória",
                        validate: validateAge,
                    })}
                />
                {errors.birthDate && <p className="text-red-500 text-xs">{errors.birthDate.message}</p>}
            </div>

            <div className="container-inputs">
                <label htmlFor="email" className="labelText">Endereço de E-mail</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="input"
                    {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "E-mail inválido",
                        },
                    })}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            <div className="container-inputs">
                <label htmlFor="phone" className="labelText">Telefone</label>
                <input
                    id="phone"
                    type="text"
                    placeholder="11 98765-4321"
                    className="input"
                    {...register("phone", {
                        required: "Telefone é obrigatório",
                        pattern: {
                            value: /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/,
                            message: "Formato de telefone inválido",
                        },
                    })}
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
            </div>
        </div>
    );
}
