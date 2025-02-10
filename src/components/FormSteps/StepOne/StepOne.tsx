import "../step.css";
import InputField from '../../InputField';

export function StepOne() {
    const validateAge = (value: string) => {
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 18 || "Você precisa ser maior de 18 anos.";
    };

    return (
        <div className="step-content">
            <InputField
                id="fullName"
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                validation={{ required: "Nome completo é obrigatório" }}
            />

            <InputField
                id="birthDate"
                label="Data de Nascimento" type="date"
                validation={{ required: "Data de nascimento é obrigatória", validate: validateAge }}
            />

            <InputField
                id="email"
                label="Endereço de E-mail" type="email"
                placeholder="Digite seu e-mail"
                validation={{
                    required: "E-mail é obrigatório",
                    pattern: {
                        // value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "E-mail inválido",
                    },
                }} />

            <InputField
                id="phone"
                label="Telefone"
                placeholder="11 98765-4321"
                validation={{
                    required: "Telefone é obrigatório",
                    pattern: {
                        // value: /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/,
                        message: "Formato de telefone inválido",
                    },
                }} />
        </div>
    );
}
