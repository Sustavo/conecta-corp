import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider } from "react-hook-form";
import { formSchema } from "../lib/zod/wizard-form-datas";

export function FormProviderWrapper({ children }: { children: React.ReactNode}) {
    const methods = useForm({
        resolver: zodResolver(formSchema,),
        defaultValues: {
            fullName: "",
            birthDate: "",
            email: "",
            phone: "",
            residentialAddress: {
                country: "",
                state: "",
                city: "",
                street: "",
                zip: "",
            },
            isBillingSameAsResidential: false,
            billingAddress: {
                country: "",
                state: "",
                city: "",
                street: "",
                zip: "",
            },
            occupation: "",
            company: "",
            industry: "",
            salaryRange: "",
            interests: {
                products: [],
                source: [],
            },
        },
    });

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
}