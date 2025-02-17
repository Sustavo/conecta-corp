import { useFormContext } from "react-hook-form";
import InputField from "../../InputField";
import { StepOneFormData } from "../../../lib/zod/wizard-form-datas";

export default function StepOne() {
    const {
        register,
        formState: { errors },
    } = useFormContext<StepOneFormData>();
    
    return (
        <div className="step-content">
            <InputField
                id="fullName"
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                register={register}
                error={typeof errors.fullName?.message === "string" ? errors.fullName.message : undefined}
                isRequired={true}
            />

            <InputField
                id="birthDate"
                label="Data de Nascimento"
                type="date"
                register={register}
                error={typeof errors.birthDate?.message === "string" ? errors.birthDate.message : undefined}
                isRequired={true}
            />

            <InputField
                id="email"
                label="Endereço de E-mail"
                type="email"
                placeholder="Digite seu e-mail"
                register={register}
                error={typeof errors.email?.message === "string" ? errors.email.message : undefined}
                isRequired={true}
            />

            <InputField
                id="phone"
                label="Telefone"
                placeholder="11 98765-4321"
                register={register}
                error={typeof errors.phone?.message === "string" ? errors.phone.message : undefined}
                isRequired={true}
            />
        </div>
    );
}