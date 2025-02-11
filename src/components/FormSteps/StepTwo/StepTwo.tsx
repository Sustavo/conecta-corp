import { useFormContext } from 'react-hook-form';
import '../step.css'
import InputField from '../../InputField';
import { StepTwoFormData } from '../../../lib/zod/wizard-form-datas';
import { useEffect, useState } from 'react';

export function StepTwo() {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext<StepTwoFormData>();

    const [isSameAddress, setIsSameAddress] = useState(false);

    const country = watch('residentialAddress.country');
    const state = watch('residentialAddress.state');
    const city = watch('residentialAddress.city');
    const street = watch('residentialAddress.street');
    const zip = watch('residentialAddress.zip');

    useEffect(() => {
        if (isSameAddress) {
            setValue('billingAddress', { country, state, city, street, zip });
        } else {
            setValue('billingAddress', undefined);
        }
    }, [isSameAddress, country, state, city, street, zip, setValue]);

    return (
        <div className="step-content">
            <InputField
                id='residentialAddress.country'
                label='País'
                placeholder='Digite o país'
                register={register}
                error={typeof errors.residentialAddress?.country?.message === "string" ? errors.residentialAddress?.country.message : undefined}
                isRequired={true}
            />

            <InputField
                id='residentialAddress.state'
                label='Estado'
                placeholder='Digite o estado'
                register={register}
                error={typeof errors.residentialAddress?.state?.message === "string" ? errors.residentialAddress.state.message : undefined}
                isRequired={true}
            />

            <InputField
                id='residentialAddress.city'
                label='Cidade'
                placeholder='Digite a cidade'
                register={register}
                error={typeof errors.residentialAddress?.city?.message === "string" ? errors.residentialAddress.city.message : undefined}
                isRequired={true}
            />

            <InputField
                id='residentialAddress.street'
                label='Rua'
                placeholder='Digite a rua'
                register={register}
                error={typeof errors.residentialAddress?.street?.message === "string" ? errors.residentialAddress.street.message : undefined}
                isRequired={true}
            />

            <InputField
                id='residentialAddress.zip'
                label='CEP'
                placeholder='Digite a CEP'
                register={register}
                error={typeof errors.residentialAddress?.zip?.message === "string" ? errors.residentialAddress.zip.message : undefined}
                isRequired={true}
            />

            <div className="container-inputs">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isSameAddress}
                        onChange={() => setIsSameAddress(!isSameAddress)}
                    />
                    Endereço de cobrança é o mesmo que o residencial
                </label>
            </div>
        </div>
    );
}
