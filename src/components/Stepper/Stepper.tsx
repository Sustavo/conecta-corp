import "./stepper.css";
import { TiTick } from "react-icons/ti";

interface StepperProps {
  steps: {
    title: string;
    subTitle: string;
  }[]
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <>
      <div className="flex flex-col justify-between gap-1">
        {steps?.map(({ subTitle, title }, i) => (
          <div className="" key={i}>
            <div
              className={`step-item 
              ${currentStep === i + 1 && "active"} 
              ${(i + 1 < currentStep) && "complete"} 
              `}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="step">
                  {i + 1 < currentStep ? <TiTick size={24} /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="line" />
                )}
              </div>
              <div className="flex flex-col w-[264px]">
                <span className="titleText">{title}</span>
                <span className="subTitleText">{subTitle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;