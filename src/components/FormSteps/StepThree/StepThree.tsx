import InputField from "../../InputField";
import SelectField from "../../SelectField";

export function StepThree() {
  return (
    <div className="step-content">
      <InputField
        id='occupation'
        label='Ocupação Atual'
        placeholder='Digite sua ocupação'
        validation={{ required: "Ocupação é obrigatório" }}
      />

      <InputField
        id='company'
        label='Empresa Onde Trabalha'
        placeholder="Digite o nome da empresa"
        validation={{ required: "O nome da empresa é obrigatório" }}
      />

      <InputField
        id='industry'
        label='Ramo de Atividade'
        placeholder="Digite o ramo de atividade"
        validation={{ required: "Ramo de atividade é obrigatório" }}
      />

      <SelectField id="salaryRange" label="Salário Aproximado">
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
