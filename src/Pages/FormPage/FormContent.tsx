import { FORM_STEPS, VALIDATION_STEPS } from "./steps";
import { FormProvider, useFormContext } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import DesktopStepper from "../../components/Steppers/DesktopStepper/DesktopStepper";
import MobileStepper from "../../components/Steppers/MobileStepper/MobileStepper";
import { FormSchemaData } from "../../lib/zod/wizard-form-datas";
import { modifyPdf } from "../../utils/ModifyPdf/modify-pdf";
import SignaturePad from "react-signature-pad-wrapper";

export default function FormContent() {
  const methods = useFormContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [isExact1200, setIsExact1200] = useState(window.innerWidth > 1200);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const sendDocument = async (data: FormSchemaData) => {
    try {

      console.log("Documento enviado com sucesso:", data);
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
    console.log(signaturePadRef)
  },[signaturePadRef])

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
            {/* {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
            {currentStep === 4 && <StepFour />}
            {currentStep === 5 && <StepFive />} */}
            <SignaturePad
              ref={signaturePadRef}
              width={400}
              height={200}
            />
            <button
              className="styled-button"
              // onClick={() => handleNextStep(methods.getValues() as FormSchemaData)}
              // onClick={() => sendDocument(methods.getValues() as FormSchemaData)}
              onClick={() => modifyPdf(methods.getValues() as FormSchemaData)}
              // onClick={() => getPdfDimensions()}
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