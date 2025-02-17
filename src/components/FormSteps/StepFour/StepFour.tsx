import { useFormContext } from "react-hook-form";
import InputField from "../../InputField";
import SelectField from "../../SelectField";
import { StepFourFormData } from "../../../lib/zod/wizard-form-datas";

export default function StepFour() {
  const {
    register,
    formState: { errors },
  } = useFormContext<StepFourFormData>();

  return (
    <div className="step-content">
      <InputField
        id='occupation'
        label='Ocupação Atual'
        placeholder='Digite sua ocupação'
        register={register}
        error={typeof errors.occupation?.message === "string" ? errors.occupation.message : undefined}
        isRequired={true}
      />

      <InputField
        id='company'
        label='Empresa Onde Trabalha'
        placeholder="Digite o nome da empresa"
        register={register}
        error={typeof errors.company?.message === "string" ? errors.company.message : undefined}
        isRequired={true}

      />

      <InputField
        id='industry'
        label='Ramo de Atividade'
        placeholder="Digite o ramo de atividade"
        register={register}
        error={typeof errors.industry?.message === "string" ? errors.industry.message : undefined}
        isRequired={true}
      />

      <SelectField
        id="salaryRange"
        label="Salário Aproximado"
        error={typeof errors.salaryRange?.message === "string" ? errors.salaryRange.message : undefined}
        isRequired={true}
        register={register}
      >
        <option value="">Selecione uma faixa salarial</option>
        <option value="0-2000">R$ 0 - R$ 2.000</option>
        <option value="2001-5000">R$ 2.001 - R$ 5.000</option>
        <option value="5001-10000">R$ 5.001 - R$ 10.000</option>
        <option value="10001-20000">R$ 10.001 - R$ 20.000</option>
        <option value="20001+">Acima de R$ 20.001</option>
      </SelectField>

    </div>
  );
}
