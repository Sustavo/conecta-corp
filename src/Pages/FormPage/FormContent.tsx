import { FORM_STEPS, VALIDATION_STEPS } from "./steps";
import { FormProvider, useFormContext } from "react-hook-form";
import { StepOne } from "../../components/FormSteps/StepOne/StepOne";
import { StepTwo } from "../../components/FormSteps/StepTwo/StepTwo";
import { StepFive } from "../../components/FormSteps/StepFive/StepFive";
import { useEffect, useState } from "react";
import { StepFour } from "../../components/FormSteps/StepFour/StepFour";
import StepThree from "../../components/FormSteps/StepThree/StepThree";
import DesktopStepper from "../../components/Steppers/DesktopStepper/DesktopStepper";
import MobileStepper from "../../components/Steppers/MobileStepper/MobileStepper";
import axios from "axios";
import { FormSchemaData } from "../../lib/zod/wizard-form-datas";

export default function FormContent() {
  const methods = useFormContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [isExact1200, setIsExact1200] = useState(window.innerWidth > 1200);

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const sendDocument = async (data: FormSchemaData) => {
    try {
      const formData = {
        fullName: data.fullName,
        birthDate: data.birthDate,
        email: data.email,
        phone: data.phone,
        residentialAddress: `${data.residentialAddress.street}, ${data.residentialAddress.city} - ${data.residentialAddress.state}, ${data.residentialAddress.country}, ${data.residentialAddress.zip}`,
        billingAddress: `${data.billingAddress?.street}, ${data.billingAddress?.city} - ${data.billingAddress?.state}, ${data.billingAddress?.country}, ${data.billingAddress?.zip}`,
        occupation: data.occupation,
        company: data.company.trim(),
        industry: data.industry,
        salaryRange: data.salaryRange
      };

      const requestBody = {
        title: "Contrato de Prestação de Serviços",
        externalId: `contrato_${data.birthDate.replace(/-/g, "_")}`,
        recipients: [
          {
            name: data.fullName,
            email: data.email,
            role: "SIGNER",
            signingOrder: 0
          }
        ],
        meta: {},
        authOptions: {
          globalAccessAuth: "ACCOUNT",
          globalActionAuth: "ACCOUNT"
        },
        formData
      };

      const response = await axios.post("https://app.documenso.com/api/v2-beta/template", requestBody, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer api_8habvnud7oamtjsn"
        }
      });

      console.log("Documento enviado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao enviar documento:", error);
    }
  };

  const handleNextStep = async (data: FormSchemaData) => {
    const isStepValid = await methods.trigger(VALIDATION_STEPS[currentStep - 1]);
    if (isStepValid) {
      if (currentStep < 5) {
        setCurrentStep((prev) => prev + 1);
      } else {
        console.log("Form data:", methods.getValues());
        sendDocument(data)
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsExact1200(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isExact1200 ? "flex justify-center gap-40 mt-32" : "flex flex-col justify-center items-center mt-32"}>
      <div className="flex flex-col">
        <div
          className={`cursor-pointer w-min py-1 px-2 relative bottom-8 ${currentStep === 1 ? "invisible" : ""
            }`}
          onClick={() => prevStep()}
        >
          <span className="text-[20px] text-[#605f6e] font-medium">Voltar</span>
        </div>
        {isExact1200 ? (
          <DesktopStepper steps={FORM_STEPS} currentStep={currentStep} />
        ) : (
          <MobileStepper steps={FORM_STEPS} currentStep={currentStep} />
        )}
        {/* */}

      </div>
      <div className="w-[600px] px-4 max-sm:w-full pb-8">
        {methods && (
          <FormProvider {...methods}>
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
            {currentStep === 4 && <StepFour />}
            {currentStep === 5 && <StepFive />}
            <button
              className="styled-button"
              onClick={() => handleNextStep(methods.getValues() as FormSchemaData)}
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