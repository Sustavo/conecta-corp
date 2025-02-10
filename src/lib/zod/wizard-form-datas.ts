import { z } from "zod";

export const addressSchema = z.object({
    country: z.string().min(1, "País é obrigatório"),
    state: z.string().min(1, "Estado é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatória"),
    street: z.string().min(1, "Rua é obrigatória"),
    zip: z.string().min(1, "CEP é obrigatório"),
});

export const formSchema = z.object({
    fullName: z.string().min(1, "Nome completo é obrigatório"),
    birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    zipCode: z.string().min(1, "CEP é obrigatório"),
    company: z.string().optional(),
    occupation: z.string().optional(),
    industry: z.string().optional(),
    salaryRange: z.string().optional(),
    interests: z.object({
        products: z.array(z.string()),
        source: z.array(z.string()),
    }),
    isBillingSameAsResidential: z.boolean(),
    residentialAddress: addressSchema,
    billingAddress: addressSchema,
});