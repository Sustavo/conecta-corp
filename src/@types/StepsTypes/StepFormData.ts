export interface StepOneFormData {
  fullName: string;
  birthDate: string;
  email: string;
  phone: string;
}

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

export interface StepThreeFormData {
  occupation: string;
  company: string;
  industry: string;
  salaryRange: string;
}

export interface StepFourFormData {
  interests: {
    products: string[];
    source: string[];
  };
}

