import "./mobileStepper.css";
import { TiTick } from "react-icons/ti";

interface StepperProps {
  steps: {
    title: string;
    subTitle: string;
  }[];
  currentStep: number;
}

export default function MobileStepper({ steps, currentStep }: StepperProps) {

  return (
    <>
      <div className="flex flex-col items-center mb-8 gap-8">
        <div className="flex gap-1">
          {steps?.map((_, i) => (
            <div className="" key={i}>
              <div
                className={`step-item 
              ${currentStep === i + 1 && "active"} 
              ${i + 1 < currentStep && "complete"} 
              `}
              >
                <div className="flex items-center gap-1">
                  <div className="step">
                    {i + 1 < currentStep ? <TiTick size={24} /> : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-10 h-1 bg-[#b3a5eb] rounded-lg" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className="titleText font-black">
          {steps.length >= currentStep && steps[currentStep - 1].title}
        </span>
      </div>
    </>
  );
}
