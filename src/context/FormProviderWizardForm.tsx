import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider } from "react-hook-form";
import { formSchema } from "../lib/zod/wizard-form-datas";

export function FormProviderWrapper({ children }: { children: React.ReactNode}) {
    const methods = useForm({
        resolver: zodResolver(formSchema,),
        defaultValues: {
            fullName: "Gustavo Sousa Castro",
            birthDate: "17/11/2003",
            email: "gust4v0309@gmail.com",
            phone: "(85) 99761-7221",
            residentialAddress: {
                country: "Brazil",
                state: "CE",
                city: "Fortaleza",
                street: "Guarani, 617",
                zip: "60510-192",
            },
            isBillingSameAsResidential: false,
            billingAddress: {
                country: "Brazil",
                state: "CE",
                city: "Fortaleza",
                street: "Guarani, 617",
                zip: "60510-192",
            },
            occupation: "Developer",
            company: "Onyx",
            industry: "industry",
            salaryRange: "4000-6000",
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