import { useFormContext } from "react-hook-form";
import { StepThreeFormData } from "../../../@types/StepTypes/StepThreeFormData";

export function StepThree() {
  const {
    register,
    formState: { errors },
  } = useFormContext<StepThreeFormData>();

  return (
    <div className="step-content">
      <div className="container-inputs">
        <label htmlFor="occupation" className="labelText">
          Ocupação Atual
        </label>
        <input
          id="occupation"
          type="text"
          placeholder="Digite sua ocupação"
          className="input"
          {...register("occupation", { required: "Ocupação é obrigatória" })}
        />
        {errors.occupation && <p className="text-red-500 text-xs">{errors.occupation.message}</p>}
      </div>

      <div className="container-inputs">
        <label htmlFor="company" className="labelText">
          Empresa Onde Trabalha
        </label>
        <input
          id="company"
          type="text"
          placeholder="Digite o nome da empresa"
          className="input"
          {...register("company", { required: "O nome da empresa é obrigatório" })}
        />
        {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
      </div>

      <div className="container-inputs">
        <label htmlFor="industry" className="labelText">
          Ramo de Atividade
        </label>
        <input
          id="industry"
          type="text"
          placeholder="Digite o ramo de atividade"
          className="input"
          {...register("industry", { required: "Ramo de atividade é obrigatório" })}
        />
        {errors.industry && <p className="text-red-500 text-xs">{errors.industry.message}</p>}
      </div>

      <div className="container-inputs">
        <label htmlFor="salaryRange" className="labelText">
          Salário Aproximado
        </label>
        <select
          id="salaryRange"
          className="input"
          {...register("salaryRange", { required: "Faixa salarial é obrigatória" })}
        >
          <option value="">Selecione uma faixa salarial</option>
          <option value="0-2000">R$ 0 - R$ 2.000</option>
          <option value="2001-5000">R$ 2.001 - R$ 5.000</option>
          <option value="5001-10000">R$ 5.001 - R$ 10.000</option>
          <option value="10001-20000">R$ 10.001 - R$ 20.000</option>
          <option value="20001+">Acima de R$ 20.001</option>
        </select>
        {errors.salaryRange && <p className="text-red-500 text-xs">{errors.salaryRange.message}</p>}
      </div>
    </div>
  );
}
