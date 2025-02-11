import Stepper from "../../components/Stepper/Stepper";
import { FORM_STEPS, VALIDATION_STEPS } from "./steps";
import { FormProvider, useFormContext } from "react-hook-form";
import { StepOne } from "../../components/FormSteps/StepOne/StepOne";
import { StepTwo } from "../../components/FormSteps/StepTwo/StepTwo";
import { StepThree } from "../../components/FormSteps/StepThree/StepThree";
import { StepFour } from "../../components/FormSteps/StepFour/StepFour";
import { useState } from "react";

export default function FormContent() {
    const methods = useFormContext();
    const [currentStep, setCurrentStep] = useState(1);

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const onSubmit = (data: any) => {
        console.log("Form submitted with data:", data);
    };

    console.log(methods.getValues());

    return (
        <div className="flex justify-center gap-40 mt-32">
            <div className="flex flex-col">
                <div
                    className={`cursor-pointer w-min py-1 px-2 relative bottom-16 ${currentStep === 1 ? 'invisible' : ''}`}
                    onClick={() => prevStep()}
                >
                    <span className="text-[20px] text-[#605f6e] font-medium">Voltar</span>
                </div>
                <Stepper steps={FORM_STEPS} currentStep={currentStep} />
            </div>
            <div>
                {methods && (
                    <FormProvider {...methods}>
                        {currentStep === 1 && <StepOne />}
                        {currentStep === 2 && <StepTwo />}
                        {currentStep === 3 && <StepThree />}
                        {currentStep === 4 && <StepFour />}
                        <button
                            className="styled-button"
                            onClick={async () => {
                                const isStepValid = await methods.trigger(VALIDATION_STEPS[currentStep - 1]);
                                if (isStepValid) {
                                    setCurrentStep((prev) => prev + 1);
                                }
                            }}
                            type="button"
                        >
                            {currentStep === FORM_STEPS.length ? "Finalizar" : "Próximo"}
                        </button>
                    </FormProvider>
                )}
            </div>
        </div>
    );
}
