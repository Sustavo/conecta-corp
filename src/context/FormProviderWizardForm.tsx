import { createContext, useContext } from "react";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../lib/zod/wizard-form-datas";
import { z } from "zod";

type FormDataSteps = z.infer<typeof formSchema>;

const FormContext = createContext<{
    methods: UseFormReturn<FormDataSteps>;
  } | null>(null);

export function FormProviderWrapper({ children }: { children: React.ReactNode }) {
    const methods = useForm<FormDataSteps>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            birthDate: "",
            email: "",
            phone: "",
            zipCode: "",
            company: "",
            occupation: "",
            industry: "",
            salaryRange: "",
            interests: { products: [], source: [] },
            isBillingSameAsResidential: false,
            residentialAddress: { country: "", state: "", city: "", street: "", zip: "" },
            billingAddress: { country: "", state: "", city: "", street: "", zip: "" },
        },
    });

    return (
        <FormContext.Provider value={{ methods }}>
            <FormProvider {...methods}>{children}</FormProvider>
        </FormContext.Provider>
    );
}

export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext deve ser usado dentro de um FormProviderWrapper");
    }
    return context;
}
