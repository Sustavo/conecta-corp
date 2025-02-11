import { useFormContext } from "react-hook-form";
import { StepThreeFormData } from "../../../lib/zod/wizard-form-datas";
import InputField from "../../InputField";

export default function StepThree() {
    const {
            register,
            formState: { errors },
        } = useFormContext<StepThreeFormData>();

    return (
            <div className="step-content">
                <InputField
                    id='billingAddress.country'
                    label='País'
                    placeholder='Digite o país'
                    register={register}
                    error={typeof errors.billingAddress?.country?.message === "string" ? errors.billingAddress?.country.message : undefined}
                    isRequired={true}
                />
    
                <InputField
                    id='billingAddress.state'
                    label='Estado'
                    placeholder='Digite o estado'
                    register={register}
                    error={typeof errors.billingAddress?.state?.message === "string" ? errors.billingAddress.state.message : undefined}
                    isRequired={true}
                />
    
                <InputField
                    id='billingAddress.city'
                    label='Cidade'
                    placeholder='Digite a cidade'
                    register={register}
                    error={typeof errors.billingAddress?.city?.message === "string" ? errors.billingAddress.city.message : undefined}
                    isRequired={true}
                />
    
                <InputField
                    id='billingAddress.street'
                    label='Rua'
                    placeholder='Digite a rua'
                    register={register}
                    error={typeof errors.billingAddress?.street?.message === "string" ? errors.billingAddress.street.message : undefined}
                    isRequired={true}
                />
    
                <InputField
                    id='billingAddress.zip'
                    label='CEP'
                    placeholder='Digite a CEP'
                    register={register}
                    error={typeof errors.billingAddress?.zip?.message === "string" ? errors.billingAddress.zip.message : undefined}
                    isRequired={true}
                />
            </div>
        );
}