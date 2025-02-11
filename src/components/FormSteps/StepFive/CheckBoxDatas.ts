type CheckBoxData = {
    id: string;
    idForm: "interests.products" | "interests.source" | `interests.products.${number}` | `interests.source.${number}`;
    label: string;
    value: string;
  };

export const CHECKBOX_PRODUCTS_DATA: CheckBoxData[] = [
  {
    id: "product1",
    idForm: "interests.products",
    label: "Produto A",
    value: "product1",
  },
  {
    id: "product2",
    idForm: "interests.products",
    label: "Produto B",
    value: "product2",
  },
  {
    id: "product3",
    idForm: "interests.products",
    label: "Produto C",
    value: "product3",
  },
];

export const CHECKBOX_SOURCE_DATA: CheckBoxData[] = [
  {
    id: "source1",
    idForm: "interests.source",
    label: "Indicação de amigo",
    value: "source1",
  },
  {
    id: "source2",
    idForm: "interests.source",
    label: "Redes sociais",
    value: "source2",
  },
  {
    id: "source3",
    idForm: "interests.source",
    label: "Google",
    value: "source3",
  },
  {
    id: "source4",
    idForm: "interests.source",
    label: "Outros",
    value: "source4",
  },
];
