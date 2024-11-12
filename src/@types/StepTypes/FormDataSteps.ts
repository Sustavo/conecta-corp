export interface FormDataSteps {
    fullName: string;
    birthDate: string;
    email: string;
    phone: string;
    residentialAddress: {
        country: string;
        state: string;
        city: string;
        street: string;
        zip: string;
    };
    isBillingSameAsResidential: boolean;
    billingAddress?: {
        country: string;
        state: string;
        city: string;
        street: string;
        zip: string;
    };
    occupation: string;
    company: string;
    industry: string;
    salaryRange: string;
    zipCode: string;
    interests: {
        products: string[];
        source: string[];
    };
}
