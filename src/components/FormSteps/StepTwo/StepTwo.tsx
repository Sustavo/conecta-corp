import { useFormContext } from 'react-hook-form';
import { StepTwoFormData } from '../../../@types/StepTypes/StepTwoFormData';
import '../step.css'
import InputField from '../../InputField';

export function StepTwo() {
    const {
        register,
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
            <InputField
                id='residentialAddress.country' 
                label='País'
                placeholder='Digite o país'
                validation={{ required: "País é obrigatório" }} 
                />

            <InputField
                id='residentialAddress.state' 
                label='Estado'
                placeholder='Digite o estado'
                validation={{ required: "Estado é obrigatório" }} 
                />

            <InputField
                id='residentialAddress.city' 
                label='Cidade'
                placeholder='Digite a cidade'
                validation={{ required: "Cidade é obrigatório" }} 
                />

            <InputField
                id='residentialAddress.street' 
                label='Rua'
                placeholder='Digite a rua'
                validation={{ required: "Rua é obrigatório" }} 
                />

            <InputField
                id='residentialAddress.zip' 
                label='CEP'
                placeholder='Digite a CEP'
                validation={{ required: "CEP é obrigatório" }} 
                />

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
        </div>
    );
}
