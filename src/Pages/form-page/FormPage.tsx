import { useState } from "react";
import Stepper from "../../components/Stepper/Stepper";
import { StepOne } from "../../components/FormSteps/StepOne/StepOne";
import { FormProvider, useForm } from "react-hook-form";
import { StepTwo } from "../../components/FormSteps/StepTwo/StepTwo";
import "./formPage.css"
import { StepThree } from "../../components/FormSteps/StepThree/StepThree";
import { StepFour } from "../../components/FormSteps/StepFour/StepFour";
import { FormDataSteps } from "../../@types/StepTypes/FormDataSteps";

const steps = [
    {
        title: "Informações Pessoais",
        subTitle: "Preencha o formulário com suas informações pessoais."
    },
    {
        title: "Informações de Endereço",
        subTitle: "Preencha o formulário com suas informações de endereço."
    },
    {
        title: "Informações Profissionais",
        subTitle: "Preencha o formulário com suas informações profissionais."
    },
    {
        title: "Preferências e Interesses",
        subTitle: "Precisamos saber quais são as suas preferências e seus interesses."
    }
];

const billingAddress = {
    country: "",
    state: "",
    city: "",
    street: "",
    zip: ""
};

const residentialAddress = {
    country: "",
    state: "",
    city: "",
    street: "",
    zip: ""
};

const isBillingSameAsResidential = false;

export function FormPage() {
    const [currentStep, setCurrentStep] = useState(1);

    const methods = useForm<FormDataSteps>({
        defaultValues: {
            fullName: '',
            birthDate: '',
            email: '',
            phone: '',
            zipCode: '',
            company: '',
            occupation: '',
            industry: '',
            salaryRange: '',
            interests: {
                products: [],
                source: [],
            },
            isBillingSameAsResidential: isBillingSameAsResidential,
            residentialAddress: residentialAddress, 
            billingAddress: billingAddress, 
        },
    });

    const handleStepChange = (data: any) => {
        if (currentStep === steps.length) {
            onSubmit(data);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const onSubmit = (data: FormDataSteps) => {
        console.log("Dados enviados: ", data);
    };

    return (
        <>
            <div className="flex justify-center gap-40 mt-32">
                <div className="flex flex-col">
                    <div
                        className={`cursor-pointer w-min py-1 px-2 relative bottom-16 ${currentStep === 1 ? 'invisible' : ''}`}
                        onClick={() => prevStep()}
                    >
                        <span className="text-[20px] text-[#605f6e] font-medium">Voltar</span>
                    </div>
                    <Stepper steps={steps} currentStep={currentStep} />
                </div>
                <div>
                    <FormProvider {...methods}>
                        {currentStep === 1 && <StepOne />}
                        {currentStep === 2 && <StepTwo />}
                        {currentStep === 3 && <StepThree />}
                        {currentStep === 4 && <StepFour />}
                        <button
                            className="styled-button"
                            onClick={methods.handleSubmit(handleStepChange)}
                            type="button"
                        >
                            {currentStep === steps.length ? "Finalizar" : "Próximo"}
                        </button>
                    </FormProvider>
                </div>
            </div>
        </>
    );
}