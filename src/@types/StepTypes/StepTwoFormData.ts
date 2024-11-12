export interface StepTwoFormData {
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
}
