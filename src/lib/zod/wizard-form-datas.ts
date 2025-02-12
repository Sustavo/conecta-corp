import { z } from "zod";

export const addressSchema = z.object({
    country: z.string().min(1, "País é obrigatório"),
    state: z.string().min(1, "Estado é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatória"),
    street: z.string().min(1, "Rua é obrigatória"),
    zip: z.string().min(1, "CEP é obrigatório"),
});

export const stepOneSchema = z.object({
    fullName: z.string().min(1, "Nome completo é obrigatório"),
    birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(10, "Telefone inválido"),
});

export const stepTwoSchema = z.object({
    residentialAddress: addressSchema,
    billingAddress: addressSchema,
});

export const stepThreeSchema = z.object({
    billingAddress: addressSchema
});

export const stepFourSchema = z.object({
    occupation: z.string().min(1, "Ocupação é obrigatória"),
    company: z.string().min(1, "Empresa é obrigatória"),
    industry: z.string().min(1, "Industria é obrigatória"),
    salaryRange: z.string().min(1, "Renge Salarial é obrigatório"),
});

export const stepFiveSchema = z.object({
    interests: z.object({
        products: z.array(z.string()).optional(),
        source: z.array(z.string()).optional(),
    }),
});
export const formSchema = z.object({
    ...stepOneSchema.shape,
    ...stepTwoSchema.shape,
    ...stepFourSchema.shape,
    ...stepFiveSchema.shape,
});

export type StepOneFormData = z.infer<typeof stepOneSchema>;
export type StepTwoFormData = z.infer<typeof stepTwoSchema>;
export type StepThreeFormData = z.infer<typeof stepThreeSchema>;
export type StepFourFormData = z.infer<typeof stepFourSchema>;
export type StepFiveFormData = z.infer<typeof stepFiveSchema>;
export type FormSchemaData = z.infer<typeof formSchema>;
