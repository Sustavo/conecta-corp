import "./formPage.css"
import { FormProviderWrapper } from "../../context/FormProviderWizardForm";
import FormContent from "./FormContent";

export function FormPage() {
    return (
        <FormProviderWrapper>
            <FormContent />
        </FormProviderWrapper>
    );
}
