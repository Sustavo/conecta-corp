import { useFormContext } from 'react-hook-form';
import CheckBoxForm from '../../CheckBoxForm';
import { CHECKBOX_PRODUCTS_DATA, CHECKBOX_SOURCE_DATA } from './CheckBoxDatas';
import { StepFourFormData } from '../../../lib/zod/wizard-form-datas';

export function StepFive() {
  const { register, formState: { errors } } = useFormContext<StepFourFormData>();

  return (
    <div className="step-content w-[600px]">
      <CheckBoxForm
        label='Produtos ou serviços de interesse'
        checkBoxValues={CHECKBOX_PRODUCTS_DATA}
        register={register}
        isRequired={true}
        error={typeof errors.interests?.products?.message === "string" ? errors.interests?.products?.message : undefined}
      />

      <CheckBoxForm
        label='Como conheceu a ConectaCorp?'
        checkBoxValues={CHECKBOX_SOURCE_DATA}
        register={register}
        isRequired={true}
        error={typeof errors.interests?.source?.message === "string" ? errors.interests?.source?.message : undefined}
      />
    </div>
  );
}
