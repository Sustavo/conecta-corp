import { useFormContext } from 'react-hook-form';
import { StepTwoFormData } from '../../../@types/StepTypes/StepTwoFormData';
import '../step.css'

export function StepTwo() {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext<StepTwoFormData>();

    const isBillingSameAsResidential = watch("isBillingSameAsResidential");

    const replicateAddress = () => {
        if (isBillingSameAsResidential) {
            setValue("billingAddress", watch("residentialAddress"));
        }
    };

    return (
        <div className="step-content">
            <div className="container-inputs">
                <label htmlFor="country" className="labelText">
                    País
                </label>
                <input
                    id="country"
                    type="text"
                    placeholder="Digite o país"
                    className="input"
                    {...register("residentialAddress.country", { required: "País é obrigatório" })}
                />
                {errors.residentialAddress?.country && (
                    <p className="text-red-500 text-xs">{errors.residentialAddress.country.message}</p>
                )}
            </div>

            <div className="container-inputs">
                <label htmlFor="state" className="labelText">
                    Estado
                </label>
                <input
                    id="state"
                    type="text"
                    placeholder="Digite o estado"
                    className="input"
                    {...register("residentialAddress.state", { required: "Estado é obrigatório" })}
                />
                {errors.residentialAddress?.state && (
                    <p className="text-red-500 text-xs">{errors.residentialAddress.state.message}</p>
                )}
            </div>

            <div className="container-inputs">
                <label htmlFor="city" className="labelText">
                    Cidade
                </label>
                <input
                    id="city"
                    type="text"
                    placeholder="Digite a cidade"
                    className="input"
                    {...register("residentialAddress.city", { required: "Cidade é obrigatória" })}
                />
                {errors.residentialAddress?.city && (
                    <p className="text-red-500 text-xs">{errors.residentialAddress.city.message}</p>
                )}
            </div>

            <div className="container-inputs">
                <label htmlFor="street" className="labelText">
                    Rua
                </label>
                <input
                    id="street"
                    type="text"
                    placeholder="Digite a rua"
                    className="input"
                    {...register("residentialAddress.street", { required: "Rua é obrigatória" })}
                />
                {errors.residentialAddress?.street && (
                    <p className="text-red-500 text-xs">{errors.residentialAddress.street.message}</p>
                )}
            </div>

            <div className="container-inputs">
                <label htmlFor="zip" className="labelText">
                    CEP
                </label>
                <input
                    id="zip"
                    type="text"
                    placeholder="Digite o CEP"
                    className="input"
                    {...register("residentialAddress.zip", {
                        required: "CEP é obrigatório",
                        pattern: {
                            value: /^[0-9]{5}-?[0-9]{3}$/,
                            message: "CEP inválido",
                        },
                    })}
                />
                {errors.residentialAddress?.zip && (
                    <p className="text-red-500 text-xs">{errors.residentialAddress.zip.message}</p>
                )}
            </div>

            <div className="container-inputs">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        {...register("isBillingSameAsResidential")}
                        onChange={replicateAddress}
                    />
                    O endereço de cobrança é o mesmo que o residencial
                </label>
            </div>

            {/* Render additional fields for billing address if necessary */}
        </div>
    );
}
