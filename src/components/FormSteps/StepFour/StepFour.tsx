import { useFormContext } from 'react-hook-form';
import { StepFourFormData } from '../../../@types/StepTypes/StepFourFormData';

export function StepFour() {
  const { register, formState: { errors } } = useFormContext<StepFourFormData>();

  return (
    <div className="step-content w-[600px]">
      <div className="mb-6">
        <label className="labelText">Produtos ou serviços de interesse</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="product1"
              className="mr-2 p-10"
              {...register("interests.products", { required: "Selecione ao menos um produto ou serviço." })}
            />
            <label htmlFor="product1" className="text-sm text-gray-600">Produto A</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="product2"
              className="mr-2"
              {...register("interests.products")}
            />
            <label htmlFor="product2" className="text-sm text-gray-600">Produto B</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="product3"
              className="mr-2"
              {...register("interests.products")}
            />
            <label htmlFor="product3" className="text-sm text-gray-600">Produto C</label>
          </div>
          {/* Display errors */}
          {errors?.interests?.products && (
            <p className="text-red-500 text-xs">{errors.interests.products.message}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="labelText">Como conheceu a ConectaCorp?</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="source1"
              className="mr-2"
              {...register("interests.source", { required: "Selecione ao menos uma opção." })}
            />
            <label htmlFor="source1" className="text-sm text-gray-600">Indicação de amigo</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="source2"
              className="mr-2"
              {...register("interests.source")}
            />
            <label htmlFor="source2" className="text-sm text-gray-600">Redes sociais</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="source3"
              className="mr-2"
              {...register("interests.source")}
            />
            <label htmlFor="source3" className="text-sm text-gray-600">Google</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="source4"
              className="mr-2"
              {...register("interests.source")}
            />
            <label htmlFor="source4" className="text-sm text-gray-600">Outros</label>
          </div>
          {/* Display errors */}
          {errors?.interests?.source && (
            <p className="text-red-500 text-xs">{errors.interests.source.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
